import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
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
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  UploadCloud,
  Plus,
  BarChart3,
  DollarSign,
  Users,
  FileText,
  Settings,
  Trash2,
  Edit,
  Eye,
} from "lucide-react";

interface CreatorDashboardProps {
  isLoggedIn?: boolean;
}

const CreatorDashboard: React.FC<CreatorDashboardProps> = ({
  isLoggedIn = true,
}) => {
  const [activeTab, setActiveTab] = useState("content");
  const [showUploadForm, setShowUploadForm] = useState(false);

  // Mock creator data
  const creator = {
    name: "Alex Morgan",
    username: "alexmorgan",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    isVerified: true,
    stats: {
      totalContent: 24,
      totalDownloads: 1256,
      totalRevenue: 4328.75,
      followers: 12500,
    },
  };

  // Mock content data
  const creatorContent = [
    {
      id: "1",
      title: "Cyberpunk City Collection",
      description:
        "A collection of 10 high-resolution cyberpunk city illustrations",
      price: 19.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&q=80",
      category: "Digital Art",
      downloads: 128,
      revenue: 2559.72,
      status: "published",
      publishDate: "2023-10-15",
    },
    {
      id: "2",
      title: "Neon Character Pack",
      description: "5 fully rigged 3D character models with neon aesthetics",
      price: 34.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=400&q=80",
      category: "3D Models",
      downloads: 76,
      revenue: 2659.24,
      status: "published",
      publishDate: "2023-08-22",
    },
    {
      id: "3",
      title: "Futuristic UI Elements",
      description:
        "A comprehensive pack of futuristic UI elements for web and mobile interfaces",
      price: 24.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=400&q=80",
      category: "UI Design",
      downloads: 92,
      revenue: 2299.08,
      status: "published",
      publishDate: "2023-11-05",
    },
    {
      id: "4",
      title: "Animation Masterclass",
      description:
        "A comprehensive video course on creating stunning digital animations",
      price: 49.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
      category: "Education",
      downloads: 156,
      revenue: 7798.44,
      status: "published",
      publishDate: "2023-07-10",
    },
    {
      id: "5",
      title: "Holographic Textures",
      description:
        "20 high-resolution holographic textures for 3D modeling and design",
      price: 14.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&q=80",
      category: "Textures",
      downloads: 87,
      revenue: 1304.13,
      status: "published",
      publishDate: "2023-09-18",
    },
    {
      id: "6",
      title: "Sci-Fi Sound Effects",
      description: "A collection of 50 high-quality sci-fi sound effects",
      price: 17.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
      category: "Audio",
      downloads: 42,
      revenue: 755.58,
      status: "draft",
      publishDate: "",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        isLoggedIn={isLoggedIn}
        username={creator.username}
        avatarUrl={creator.avatar}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Creator Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your content and track performance
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
                    {creator.stats.totalContent}
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
                    {creator.stats.totalDownloads.toLocaleString()}
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
                    ${creator.stats.totalRevenue.toLocaleString()}
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
                    Followers
                  </p>
                  <h3 className="text-2xl font-bold">
                    {creator.stats.followers.toLocaleString()}
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
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
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
                            <SelectItem value="digital-art">
                              Digital Art
                            </SelectItem>
                            <SelectItem value="3d-models">3D Models</SelectItem>
                            <SelectItem value="ui-design">UI Design</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="textures">Textures</SelectItem>
                            <SelectItem value="audio">Audio</SelectItem>
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
                        <UploadCloud className="h-8 w-8 mx-auto text-gray-400 mb-2" />
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
                  <h2 className="text-xl font-semibold">Your Content</h2>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Content</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="draft">Drafts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {creatorContent.map((content) => (
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

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
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

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  View detailed analytics for your content
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Top Performing Content
                    </h3>
                    <div className="space-y-4">
                      {creatorContent
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
                                {content.category}
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
                      Revenue by Category
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(
                        creatorContent.reduce(
                          (acc, content) => {
                            const category = content.category;
                            if (!acc[category]) acc[category] = 0;
                            acc[category] += content.revenue;
                            return acc;
                          },
                          {} as Record<string, number>,
                        ),
                      ).map(([category, revenue]) => (
                        <Card key={category}>
                          <CardContent className="p-6">
                            <h4 className="font-medium">{category}</h4>
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

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Earnings & Payouts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Current Balance
                      </h3>
                      <p className="text-3xl font-bold mt-2">$1,245.88</p>
                      <Button className="w-full mt-4">Withdraw</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-sm font-medium text-muted-foreground">
                        This Month
                      </h3>
                      <p className="text-3xl font-bold mt-2">$3,842.50</p>
                      <p className="text-sm text-green-500 mt-1">
                        +12.5% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Lifetime Earnings
                      </h3>
                      <p className="text-3xl font-bold mt-2">$24,328.75</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Since October 2022
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-lg font-semibold mb-4">
                  Recent Transactions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      type: "sale",
                      content: "Cyberpunk City Collection",
                      amount: 19.99,
                      date: "2023-12-15",
                      buyer: "john_doe",
                    },
                    {
                      id: 2,
                      type: "sale",
                      content: "Neon Character Pack",
                      amount: 34.99,
                      date: "2023-12-14",
                      buyer: "design_master",
                    },
                    {
                      id: 3,
                      type: "sale",
                      content: "Animation Masterclass",
                      amount: 49.99,
                      date: "2023-12-12",
                      buyer: "creative_soul",
                    },
                    {
                      id: 4,
                      type: "payout",
                      content: "",
                      amount: -250.0,
                      date: "2023-12-10",
                      buyer: "",
                    },
                    {
                      id: 5,
                      type: "sale",
                      content: "Futuristic UI Elements",
                      amount: 24.99,
                      date: "2023-12-08",
                      buyer: "web_designer",
                    },
                  ].map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 bg-muted rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-2 rounded-full ${transaction.type === "sale" ? "bg-green-100" : "bg-blue-100"}`}
                        >
                          {transaction.type === "sale" ? (
                            <DollarSign className="h-5 w-5 text-green-600" />
                          ) : (
                            <BarChart3 className="h-5 w-5 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">
                            {transaction.type === "sale" ? "Sale" : "Payout"}:{" "}
                            {transaction.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {transaction.date}
                            {transaction.buyer &&
                              ` • Buyer: ${transaction.buyer}`}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`font-bold ${transaction.type === "sale" ? "text-green-600" : "text-blue-600"}`}
                      >
                        {transaction.type === "sale" ? "+" : ""}
                        {transaction.amount.toFixed(2)} USD
                      </p>
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
                <CardTitle>Profile Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={creator.avatar} alt={creator.name} />
                      <AvatarFallback>
                        {creator.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm">
                        Change Avatar
                      </Button>
                      <p className="text-sm text-muted-foreground mt-1">
                        PNG, JPG or GIF (max. 1MB)
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="displayName">Display Name</Label>
                      <Input id="displayName" defaultValue={creator.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue={creator.username} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="alex.morgan@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        rows={4}
                        defaultValue="Digital artist specializing in cyberpunk illustrations and animations. Creating unique digital experiences for over 8 years."
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Payment Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="paymentMethod">
                          Default Payment Method
                        </Label>
                        <Select defaultValue="paypal">
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="paypal">PayPal</SelectItem>
                            <SelectItem value="bank">Bank Transfer</SelectItem>
                            <SelectItem value="stripe">Stripe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="paypalEmail">PayPal Email</Label>
                        <Input
                          id="paypalEmail"
                          type="email"
                          defaultValue="alex.morgan@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
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

export default CreatorDashboard;
