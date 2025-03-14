import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyNavbar from "../layout/CompanyNavbar";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  UploadCloud,
  BarChart3,
  DollarSign,
  Users,
  FileText,
  Settings,
  Trash2,
  Edit,
  Eye,
  Building,
  FileUp,
} from "lucide-react";

interface AdminDashboardProps {
  isLoggedIn?: boolean;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isLoggedIn = true,
}) => {
  const [activeTab, setActiveTab] = useState("content");
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("1");

  // Mock companies data
  const companies = [
    { id: "1", name: "CryptoInsights Inc.", category: "Cryptocurrency" },
    { id: "2", name: "WebDev Solutions", category: "Web Development" },
    {
      id: "3",
      name: "AI Innovations Lab",
      category: "Artificial Intelligence",
    },
  ];

  // Mock admin stats
  const adminStats = {
    totalContent: 160,
    totalDownloads: 12560,
    totalRevenue: 43280.75,
    totalUsers: 8750,
  };

  // Mock content data
  const contentItems = [
    {
      id: "1",
      title: "Q2 2023 Crypto Market Analysis",
      description:
        "Comprehensive analysis of cryptocurrency market trends and projections",
      price: 49.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&q=80",
      company: "CryptoInsights Inc.",
      companyId: "1",
      category: "Market Analysis",
      downloads: 128,
      revenue: 6398.72,
      status: "published",
      publishDate: "2023-07-15",
      fileType: "PDF",
    },
    {
      id: "2",
      title: "Modern React Architecture Guide",
      description: "Best practices for building scalable React applications",
      price: 34.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&q=80",
      company: "WebDev Solutions",
      companyId: "2",
      category: "Web Development",
      downloads: 215,
      revenue: 7522.85,
      status: "published",
      publishDate: "2023-06-22",
      fileType: "PDF + Code",
    },
    {
      id: "3",
      title: "Machine Learning Model Templates",
      description:
        "Ready-to-use templates for common machine learning applications",
      price: 79.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1677442135136-760c813028c0?w=400&q=80",
      company: "AI Innovations Lab",
      companyId: "3",
      category: "Machine Learning",
      downloads: 92,
      revenue: 7359.08,
      status: "published",
      publishDate: "2023-05-05",
      fileType: "Code + Documentation",
    },
    {
      id: "4",
      title: "Blockchain Implementation Guide",
      description:
        "Step-by-step guide for implementing blockchain in enterprise environments",
      price: 89.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&q=80",
      company: "CryptoInsights Inc.",
      companyId: "1",
      category: "Blockchain",
      downloads: 76,
      revenue: 6839.24,
      status: "published",
      publishDate: "2023-04-10",
      fileType: "PDF + Code",
    },
    {
      id: "5",
      title: "SaaS Architecture Blueprint",
      description:
        "Complete architecture guide for building scalable SaaS applications",
      price: 129.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1661956602868-6ae368943878?w=400&q=80",
      company: "WebDev Solutions",
      companyId: "2",
      category: "SaaS",
      downloads: 87,
      revenue: 11309.13,
      status: "published",
      publishDate: "2023-03-18",
      fileType: "PDF + Diagrams",
    },
    {
      id: "6",
      title: "AI for Business Transformation",
      description: "Strategic guide for implementing AI in business processes",
      price: 59.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80",
      company: "AI Innovations Lab",
      companyId: "3",
      category: "Business AI",
      downloads: 156,
      revenue: 9358.44,
      status: "draft",
      publishDate: "",
      fileType: "PDF",
    },
  ];

  const filteredContent = selectedCompany
    ? contentItems.filter((item) => item.companyId === selectedCompany)
    : contentItems;

  return (
    <div className="min-h-screen bg-background">
      <CompanyNavbar isLoggedIn={isLoggedIn} username="Admin" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage content, companies, and platform performance
            </p>
          </div>
          <Button
            className="mt-4 md:mt-0"
            onClick={() => setShowUploadForm(true)}
          >
            <UploadCloud className="mr-2 h-4 w-4" />
            Upload New Content
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Content
                  </p>
                  <h3 className="text-2xl font-bold">
                    {adminStats.totalContent}
                  </h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Downloads
                  </p>
                  <h3 className="text-2xl font-bold">
                    {adminStats.totalDownloads.toLocaleString()}
                  </h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Revenue
                  </p>
                  <h3 className="text-2xl font-bold">
                    ${adminStats.totalRevenue.toLocaleString()}
                  </h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Users
                  </p>
                  <h3 className="text-2xl font-bold">
                    {adminStats.totalUsers.toLocaleString()}
                  </h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="content" className="w-full">
            {showUploadForm ? (
              <Card>
                <CardHeader>
                  <CardTitle>Upload New Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Select
                        defaultValue={selectedCompany}
                        onValueChange={setSelectedCompany}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select company" />
                        </SelectTrigger>
                        <SelectContent>
                          {companies.map((company) => (
                            <SelectItem key={company.id} value={company.id}>
                              {company.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter content title" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Enter content description"
                        rows={4}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="market-analysis">
                              Market Analysis
                            </SelectItem>
                            <SelectItem value="blockchain">
                              Blockchain
                            </SelectItem>
                            <SelectItem value="web-development">
                              Web Development
                            </SelectItem>
                            <SelectItem value="saas">SaaS</SelectItem>
                            <SelectItem value="ai">
                              Artificial Intelligence
                            </SelectItem>
                            <SelectItem value="machine-learning">
                              Machine Learning
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="price">Price (USD)</Label>
                        <Input
                          id="price"
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fileType">File Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select file type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pdf">PDF</SelectItem>
                            <SelectItem value="code">Code</SelectItem>
                            <SelectItem value="pdf-code">PDF + Code</SelectItem>
                            <SelectItem value="software">Software</SelectItem>
                            <SelectItem value="documentation">
                              Documentation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select defaultValue="draft">
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Thumbnail Image</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <UploadCloud className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PNG, JPG or GIF (max. 2MB)
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Content Files</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <FileUp className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          ZIP, PDF, or other files (max. 500MB)
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => setShowUploadForm(false)}
                      >
                        Cancel
                      </Button>
                      <Button>Save as Draft</Button>
                      <Button variant="default">Publish</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Content Management</h2>
                  <div className="flex items-center gap-2">
                    <Select
                      defaultValue={selectedCompany}
                      onValueChange={setSelectedCompany}
                    >
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Filter by company" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Companies</SelectItem>
                        {companies.map((company) => (
                          <SelectItem key={company.id} value={company.id}>
                            {company.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {filteredContent.map((content) => (
                    <Card key={content.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-48 h-48 md:h-auto">
                          <img
                            src={content.imageUrl}
                            alt={content.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div>
                              <h3 className="text-lg font-semibold">
                                {content.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {content.description}
                              </p>
                              <p className="text-sm font-medium mt-2">
                                <span className="text-muted-foreground">
                                  Company:{" "}
                                </span>
                                {content.company}
                              </p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <Badge
                                variant={
                                  content.status === "published"
                                    ? "default"
                                    : "outline"
                                }
                              >
                                {content.status === "published"
                                  ? "Published"
                                  : "Draft"}
                              </Badge>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Category
                              </p>
                              <p className="font-medium">{content.category}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Price
                              </p>
                              <p className="font-medium">${content.price}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                File Type
                              </p>
                              <p className="font-medium">{content.fileType}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Downloads
                              </p>
                              <p className="font-medium">{content.downloads}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Revenue
                              </p>
                              <p className="font-medium">
                                ${content.revenue.toLocaleString()}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-end mt-4 space-x-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/content/${content.id}`}>
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Link>
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="destructive" size="sm">
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Companies Tab */}
          <TabsContent value="companies" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Company Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Active Companies</h3>
                  <Button>
                    <Building className="mr-2 h-4 w-4" />
                    Add Company
                  </Button>
                </div>

                <div className="space-y-4">
                  {companies.map((company) => (
                    <Card key={company.id} className="overflow-hidden">
                      <div className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={`https://api.dicebear.com/7.x/identicon/svg?seed=${company.id}`}
                              alt={company.name}
                            />
                            <AvatarFallback>
                              {company.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{company.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {company.category}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/company/${company.id}`}>
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  View detailed analytics for the entire platform
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Top Performing Content
                    </h3>
                    <div className="space-y-4">
                      {contentItems
                        .sort((a, b) => b.downloads - a.downloads)
                        .slice(0, 3)
                        .map((content) => (
                          <div
                            key={content.id}
                            className="flex items-center gap-4 p-4 bg-muted rounded-lg"
                          >
                            <img
                              src={content.imageUrl}
                              alt={content.title}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium">{content.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {content.company} • {content.category}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">{content.downloads}</p>
                              <p className="text-sm text-muted-foreground">
                                Downloads
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Revenue by Company
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(
                        contentItems.reduce(
                          (acc, content) => {
                            const company = content.company;
                            if (!acc[company]) acc[company] = 0;
                            acc[company] += content.revenue;
                            return acc;
                          },
                          {} as Record<string, number>,
                        ),
                      ).map(([company, revenue]) => (
                        <Card key={company}>
                          <CardContent className="p-6">
                            <h4 className="font-medium">{company}</h4>
                            <p className="text-2xl font-bold mt-2">
                              ${revenue.toLocaleString()}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Manage platform users and their permissions
                </p>

                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Active Users</h3>
                  <div className="flex gap-2">
                    <Input placeholder="Search users..." className="w-64" />
                    <Button variant="outline">Search</Button>
                  </div>
                </div>

                <div className="border rounded-md">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
                    <div>User</div>
                    <div>Email</div>
                    <div>Role</div>
                    <div>Status</div>
                    <div className="text-right">Actions</div>
                  </div>

                  {[
                    {
                      id: 1,
                      name: "John Doe",
                      email: "john@example.com",
                      role: "Admin",
                      status: "Active",
                    },
                    {
                      id: 2,
                      name: "Jane Smith",
                      email: "jane@example.com",
                      role: "Editor",
                      status: "Active",
                    },
                    {
                      id: 3,
                      name: "Robert Johnson",
                      email: "robert@example.com",
                      role: "User",
                      status: "Active",
                    },
                    {
                      id: 4,
                      name: "Emily Davis",
                      email: "emily@example.com",
                      role: "User",
                      status: "Inactive",
                    },
                    {
                      id: 5,
                      name: "Michael Wilson",
                      email: "michael@example.com",
                      role: "User",
                      status: "Active",
                    },
                  ].map((user) => (
                    <div
                      key={user.id}
                      className="grid grid-cols-5 gap-4 p-4 border-b items-center"
                    >
                      <div className="font-medium">{user.name}</div>
                      <div className="text-muted-foreground">{user.email}</div>
                      <div>
                        <Badge
                          variant={
                            user.role === "Admin" ? "default" : "outline"
                          }
                        >
                          {user.role}
                        </Badge>
                      </div>
                      <div>
                        <Badge
                          variant={
                            user.status === "Active" ? "success" : "secondary"
                          }
                          className={
                            user.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }
                        >
                          {user.status}
                        </Badge>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      General Settings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="platformName">Platform Name</Label>
                        <Input id="platformName" defaultValue="KnowledgePay" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="supportEmail">Support Email</Label>
                        <Input
                          id="supportEmail"
                          type="email"
                          defaultValue="support@knowledgepay.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Default Currency</Label>
                        <Select defaultValue="usd">
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                            <SelectItem value="gbp">GBP (£)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="commissionRate">
                          Commission Rate (%)
                        </Label>
                        <Input
                          id="commissionRate"
                          type="number"
                          defaultValue="10"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Payment Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="paymentProcessor">
                          Payment Processor
                        </Label>
                        <Select defaultValue="stripe">
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment processor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="stripe">Stripe</SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apiKey">API Key</Label>
                        <Input
                          id="apiKey"
                          type="password"
                          value="••••••••••••••••"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>Save Settings</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
