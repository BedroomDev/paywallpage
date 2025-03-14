import React from "react";
import { Link } from "react-router-dom";
import CompanyNavbar from "../layout/CompanyNavbar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Search, Filter } from "lucide-react";

interface CompanyListProps {
  isLoggedIn?: boolean;
}

const CompanyList: React.FC<CompanyListProps> = ({ isLoggedIn = false }) => {
  // Mock companies data
  const companies = [
    {
      id: "1",
      name: "CryptoInsights Inc.",
      slug: "cryptoinsights",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=crypto",
      description:
        "Leading provider of cryptocurrency market analysis and research reports.",
      categories: ["Cryptocurrency", "Blockchain", "Market Analysis"],
      resourceCount: 24,
      followers: 8750,
      isVerified: true,
    },
    {
      id: "2",
      name: "WebDev Solutions",
      slug: "webdev-solutions",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=webdev",
      description:
        "Expert resources for web development, SaaS architecture, and modern frontend frameworks.",
      categories: ["Web Development", "SaaS", "Frontend", "Backend"],
      resourceCount: 36,
      followers: 12400,
      isVerified: true,
    },
    {
      id: "3",
      name: "AI Innovations Lab",
      slug: "ai-innovations",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=ai",
      description:
        "Cutting-edge resources for AI development, machine learning models, and practical implementations.",
      categories: [
        "Artificial Intelligence",
        "Machine Learning",
        "Neural Networks",
      ],
      resourceCount: 18,
      followers: 9200,
      isVerified: true,
    },
    {
      id: "4",
      name: "Cloud Architecture Pro",
      slug: "cloud-architecture",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=cloud",
      description:
        "Expert guides and tools for cloud infrastructure, serverless architecture, and DevOps practices.",
      categories: ["Cloud Computing", "DevOps", "Infrastructure"],
      resourceCount: 29,
      followers: 7800,
      isVerified: true,
    },
    {
      id: "5",
      name: "Mobile Dev Masters",
      slug: "mobile-masters",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=mobile",
      description:
        "Specialized resources for iOS, Android, and cross-platform mobile application development.",
      categories: ["Mobile Development", "iOS", "Android", "React Native"],
      resourceCount: 22,
      followers: 6500,
      isVerified: false,
    },
    {
      id: "6",
      name: "Data Science Hub",
      slug: "data-science",
      logo: "https://api.dicebear.com/7.x/identicon/svg?seed=data",
      description:
        "Comprehensive data science resources, statistical analysis tools, and visualization techniques.",
      categories: ["Data Science", "Analytics", "Visualization"],
      resourceCount: 31,
      followers: 8900,
      isVerified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CompanyNavbar isLoggedIn={isLoggedIn} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Knowledge Companies</h1>
            <p className="text-muted-foreground">
              Discover specialized companies offering premium digital resources
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search companies..." className="pl-10 w-full" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-14 w-14 border border-border">
                  <AvatarImage src={company.logo} alt={company.name} />
                  <AvatarFallback>
                    {company.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {company.name}
                    {company.isVerified && (
                      <Badge
                        variant="secondary"
                        className="bg-blue-500 text-white text-xs"
                      >
                        Verified
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription>@{company.slug}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {company.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {company.categories.slice(0, 3).map((category, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                  {company.categories.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{company.categories.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{company.resourceCount} resources</span>
                  <span>{company.followers.toLocaleString()} followers</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/company/${company.id}`}>View Company</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
