import React from "react";
import { useParams } from "react-router-dom";
import CompanyNavbar from "../layout/CompanyNavbar";
import ContentCard from "../shared/ContentCard";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Users, Calendar, ExternalLink, Share2 } from "lucide-react";

interface CompanyProfileProps {
  isLoggedIn?: boolean;
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({
  isLoggedIn = false,
}) => {
  const { companyId } = useParams<{ companyId: string }>();

  // Mock company data - in a real app, this would be fetched based on companyId
  const company = {
    id: companyId || "1",
    name: "CryptoInsights Inc.",
    slug: "cryptoinsights",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=crypto",
    coverImage:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&q=80",
    description:
      "Leading provider of cryptocurrency market analysis and research reports. Our team of experts delivers in-depth insights on blockchain technologies, market trends, and investment opportunities.",
    followers: 8750,
    established: "January 2019",
    website: "https://cryptoinsights.example.com",
    socialLinks: {
      twitter: "@cryptoinsights",
      linkedin: "cryptoinsights-inc",
      github: "cryptoinsights",
    },
    categories: [
      "Cryptocurrency",
      "Blockchain",
      "Market Analysis",
      "Investment",
    ],
    isVerified: true,
  };

  // Mock content data
  const companyContent = [
    {
      id: "1",
      title: "Q2 2023 Crypto Market Analysis",
      description:
        "Comprehensive analysis of cryptocurrency market trends, performance metrics, and future projections for Q2 2023.",
      price: 49.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&q=80",
      creatorName: company.name,
      creatorAvatar: company.logo,
      category: "Market Analysis",
      likes: 342,
      isLiked: false,
      downloads: 128,
      releaseDate: "2023-07-15",
      fileType: "PDF",
    },
    {
      id: "2",
      title: "Blockchain Technology Implementation Guide",
      description:
        "Step-by-step guide for implementing blockchain solutions in enterprise environments with code examples and case studies.",
      price: 79.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&q=80",
      creatorName: company.name,
      creatorAvatar: company.logo,
      category: "Blockchain",
      likes: 215,
      isLiked: true,
      downloads: 76,
      releaseDate: "2023-06-22",
      fileType: "PDF + Code",
    },
    {
      id: "3",
      title: "Crypto Trading Algorithm Package",
      description:
        "Collection of Python-based trading algorithms for cryptocurrency markets with backtesting tools and documentation.",
      price: 129.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=400&q=80",
      creatorName: company.name,
      creatorAvatar: company.logo,
      category: "Trading",
      likes: 187,
      isLiked: false,
      downloads: 92,
      releaseDate: "2023-05-05",
      fileType: "Software",
    },
    {
      id: "4",
      title: "NFT Market Opportunities Report",
      description:
        "In-depth analysis of the NFT marketplace with investment strategies and emerging trends in digital collectibles.",
      price: 39.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&q=80",
      creatorName: company.name,
      creatorAvatar: company.logo,
      category: "NFT",
      likes: 423,
      isLiked: false,
      downloads: 156,
      releaseDate: "2023-04-10",
      fileType: "PDF",
    },
    {
      id: "5",
      title: "DeFi Development Toolkit",
      description:
        "Comprehensive toolkit for developing decentralized finance applications with smart contract templates and security best practices.",
      price: 149.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&q=80",
      creatorName: company.name,
      creatorAvatar: company.logo,
      category: "DeFi",
      likes: 156,
      isLiked: true,
      downloads: 87,
      releaseDate: "2023-03-18",
      fileType: "Code + Documentation",
    },
    {
      id: "6",
      title: "Cryptocurrency Regulation Guide 2023",
      description:
        "Global overview of cryptocurrency regulations and compliance requirements for businesses and investors.",
      price: 59.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?w=400&q=80",
      creatorName: company.name,
      creatorAvatar: company.logo,
      category: "Regulation",
      likes: 98,
      isLiked: false,
      downloads: 42,
      releaseDate: "2023-02-01",
      fileType: "PDF",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CompanyNavbar isLoggedIn={isLoggedIn} />

      {/* Cover Image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden bg-gray-100">
        <img
          src={company.coverImage}
          alt={`${company.name}'s cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Company Info */}
      <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8">
          <Avatar className="w-32 h-32 border-4 border-background rounded-full bg-white">
            <AvatarImage src={company.logo} alt={company.name} />
            <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold text-white md:text-foreground">
                {company.name}
              </h1>
              {company.isVerified && (
                <Badge variant="secondary" className="bg-blue-500 text-white">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">@{company.slug}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button className="flex items-center gap-2">
              <span>Follow Company</span>
            </Button>
          </div>
        </div>

        {/* Company Stats & Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-muted-foreground mb-4">{company.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {company.categories.map((category, index) => (
                <Badge key={index} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>

            {company.website && (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{company.website}</span>
              </a>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex flex-col items-center">
                  <Users className="h-5 w-5 mb-1 text-muted-foreground" />
                  <span className="font-bold">
                    {company.followers.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Followers
                  </span>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex flex-col items-center">
                  <Calendar className="h-5 w-5 mb-1 text-muted-foreground" />
                  <span className="font-bold">Since</span>
                  <span className="text-xs text-muted-foreground">
                    {company.established}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex flex-col items-center">
                  <Calendar className="h-5 w-5 mb-1 text-muted-foreground" />
                  <span className="font-bold">{companyContent.length}</span>
                  <span className="text-xs text-muted-foreground">
                    Resources
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="market-analysis">Market Analysis</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
            <TabsTrigger value="regulation">Regulation</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {companyContent.map((content) => (
                <ContentCard
                  key={content.id}
                  id={content.id}
                  title={content.title}
                  description={content.description}
                  price={content.price}
                  currency={content.currency}
                  imageUrl={content.imageUrl}
                  creatorName={content.creatorName}
                  creatorAvatar={content.creatorAvatar}
                  category={content.category}
                  likes={content.likes}
                  isLiked={content.isLiked}
                  onClick={() =>
                    console.log(`Clicked on content: ${content.id}`)
                  }
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="market-analysis" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {companyContent
                .filter((content) => content.category === "Market Analysis")
                .map((content) => (
                  <ContentCard
                    key={content.id}
                    {...content}
                    onClick={() =>
                      console.log(`Clicked on content: ${content.id}`)
                    }
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {companyContent
                .filter((content) => content.category === "Blockchain")
                .map((content) => (
                  <ContentCard
                    key={content.id}
                    {...content}
                    onClick={() =>
                      console.log(`Clicked on content: ${content.id}`)
                    }
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="trading" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {companyContent
                .filter((content) => content.category === "Trading")
                .map((content) => (
                  <ContentCard
                    key={content.id}
                    {...content}
                    onClick={() =>
                      console.log(`Clicked on content: ${content.id}`)
                    }
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="regulation" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {companyContent
                .filter((content) => content.category === "Regulation")
                .map((content) => (
                  <ContentCard
                    key={content.id}
                    {...content}
                    onClick={() =>
                      console.log(`Clicked on content: ${content.id}`)
                    }
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyProfile;
