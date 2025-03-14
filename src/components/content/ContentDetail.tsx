import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Heart,
  Share2,
  Download,
  Calendar,
  Tag,
  Lock,
  CheckCircle,
  AlertCircle,
  FileText,
  Image as ImageIcon,
  Video,
  Music,
  File,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface ContentDetailProps {
  isLoggedIn?: boolean;
}

const ContentDetail: React.FC<ContentDetailProps> = ({
  isLoggedIn = false,
}) => {
  const { contentId } = useParams<{ contentId: string }>();
  const [isPurchased, setIsPurchased] = useState(false);
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false);

  // Mock content data - in a real app, this would be fetched based on contentId
  const content = {
    id: contentId || "1",
    title: "Cyberpunk City Collection",
    description:
      "A collection of 10 high-resolution cyberpunk city illustrations, perfect for backgrounds, wallpapers, or design projects. Each illustration is created with meticulous attention to detail, featuring neon-lit streets, futuristic architecture, and atmospheric lighting effects.",
    longDescription:
      "Dive into the vibrant world of cyberpunk with this exclusive collection of 10 high-resolution digital illustrations. Each piece is carefully crafted with attention to detail, featuring neon-lit streets, towering skyscrapers, flying vehicles, and the perfect blend of high-tech and low-life aesthetics that define the cyberpunk genre.\n\nAll illustrations are provided in multiple formats (JPG, PNG, and PSD) with a resolution of 4K (3840x2160), making them perfect for a wide range of applications including desktop wallpapers, website backgrounds, video projects, or as reference material for your own creative work.\n\nThis collection includes:\n- 10 unique cyberpunk city scenes\n- Day and night variations for selected illustrations\n- Layered PSD files for easy customization\n- Commercial usage rights\n- Free updates for future enhancements",
    price: 19.99,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80",
      "https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?w=800&q=80",
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&q=80",
    ],
    creator: {
      id: "1",
      name: "Alex Morgan",
      username: "alexmorgan",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      isVerified: true,
    },
    category: "Digital Art",
    subcategory: "Illustrations",
    tags: ["cyberpunk", "city", "digital art", "illustration", "neon"],
    fileFormat: "ZIP (JPG, PNG, PSD)",
    fileSize: "1.2 GB",
    resolution: "4K (3840x2160)",
    releaseDate: "October 15, 2023",
    lastUpdated: "December 5, 2023",
    likes: 342,
    isLiked: false,
    downloads: 128,
    comments: 47,
    rating: 4.8,
    ratingCount: 56,
    licenseType: "Commercial",
    contentItems: [
      { name: "Neon Alley.jpg", type: "image", size: "145 MB" },
      { name: "Skyline View.jpg", type: "image", size: "156 MB" },
      { name: "Downtown District.jpg", type: "image", size: "138 MB" },
      { name: "Night Market.jpg", type: "image", size: "142 MB" },
      { name: "Corporate Towers.jpg", type: "image", size: "151 MB" },
      { name: "Underground Passage.jpg", type: "image", size: "132 MB" },
      { name: "Rooftop Perspective.jpg", type: "image", size: "147 MB" },
      { name: "Transit System.jpg", type: "image", size: "139 MB" },
      { name: "Industrial Zone.jpg", type: "image", size: "144 MB" },
      { name: "Residential Block.jpg", type: "image", size: "140 MB" },
      { name: "Source Files.psd", type: "psd", size: "450 MB" },
    ],
  };

  const handlePurchase = () => {
    // In a real app, this would handle payment processing
    setIsPurchased(true);
    setShowPurchaseDialog(false);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      case "audio":
        return <Music className="h-4 w-4" />;
      case "psd":
        return <FileText className="h-4 w-4" />;
      default:
        return <File className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isLoggedIn={isLoggedIn} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Preview Images */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden bg-muted mb-4">
              <img
                src={content.imageUrl}
                alt={content.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {content.previewImages.map((img, index) => (
                <div
                  key={index}
                  className="rounded-md overflow-hidden bg-muted aspect-video"
                >
                  <img
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="description" className="w-full mt-6">
              <TabsList className="mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="files">Files</TabsTrigger>
                <TabsTrigger value="license">License</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="w-full">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">
                    About this content
                  </h3>
                  <div className="whitespace-pre-line text-muted-foreground">
                    {content.longDescription}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="files" className="w-full">
                <div className="rounded-lg border p-4">
                  <h3 className="text-xl font-semibold mb-4">Files included</h3>
                  <div className="space-y-2">
                    {content.contentItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted rounded-md"
                      >
                        <div className="flex items-center gap-3">
                          {getFileIcon(item.type)}
                          <span>{item.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {item.size}
                          </span>
                          {isPurchased ? (
                            <Button size="sm" variant="ghost">
                              <Download className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Lock className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="license" className="w-full">
                <div className="rounded-lg border p-4">
                  <h3 className="text-xl font-semibold mb-4">
                    License Information
                  </h3>
                  <p className="mb-4">
                    This content is licensed under a{" "}
                    <strong>{content.licenseType}</strong> license.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">
                          You can use this content for:
                        </p>
                        <ul className="list-disc list-inside ml-4 text-muted-foreground">
                          <li>Personal projects</li>
                          <li>Commercial projects</li>
                          <li>Client work</li>
                          <li>Educational purposes</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium">
                          You cannot use this content for:
                        </p>
                        <ul className="list-disc list-inside ml-4 text-muted-foreground">
                          <li>
                            Reselling or redistributing the original files
                          </li>
                          <li>Creating derivative products for resale</li>
                          <li>Using in NFTs or blockchain assets</li>
                          <li>Claiming ownership of the original work</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="comments" className="w-full">
                <div className="rounded-lg border p-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Comments ({content.comments})
                  </h3>
                  <p className="text-muted-foreground">
                    {isPurchased
                      ? "Join the conversation about this content."
                      : "Purchase this content to view and post comments."}
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Purchase Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h1 className="text-2xl font-bold mb-2">{content.title}</h1>
                  <p className="text-muted-foreground mb-4">
                    {content.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={content.creator.avatar}
                      alt={content.creator.name}
                    />
                    <AvatarFallback>
                      {content.creator.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Link
                      to={`/creator/${content.creator.id}`}
                      className="font-medium hover:text-primary"
                    >
                      {content.creator.name}
                      {content.creator.isVerified && (
                        <span className="ml-1 text-blue-500">✓</span>
                      )}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      @{content.creator.username}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="text-3xl font-bold">
                    {content.currency} {content.price.toFixed(2)}
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {content.category}
                  </Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">File format:</span>
                    <span className="font-medium">{content.fileFormat}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">File size:</span>
                    <span className="font-medium">{content.fileSize}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Resolution:</span>
                    <span className="font-medium">{content.resolution}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Released:</span>
                    <span className="font-medium">{content.releaseDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last updated:</span>
                    <span className="font-medium">{content.lastUpdated}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3">
                  {isPurchased ? (
                    <Button className="w-full" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      Download Files
                    </Button>
                  ) : (
                    <Dialog
                      open={showPurchaseDialog}
                      onOpenChange={setShowPurchaseDialog}
                    >
                      <DialogTrigger asChild>
                        <Button className="w-full" size="lg">
                          Purchase Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Complete Your Purchase</DialogTitle>
                          <DialogDescription>
                            You're about to purchase "{content.title}" for{" "}
                            {content.currency} {content.price.toFixed(2)}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground mb-4">
                            This is a demo purchase flow. In a real application,
                            this would connect to a payment processor.
                          </p>
                          <div className="flex items-center justify-between p-3 bg-muted rounded-md mb-4">
                            <span>Total:</span>
                            <span className="font-bold">
                              {content.currency} {content.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            variant="outline"
                            onClick={() => setShowPurchaseDialog(false)}
                          >
                            Cancel
                          </Button>
                          <Button onClick={handlePurchase}>
                            Complete Purchase
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Heart className="mr-2 h-4 w-4" />
                      Like
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Stats</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-muted rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">{content.downloads}</div>
                  <div className="text-xs text-muted-foreground">Downloads</div>
                </div>
                <div className="bg-muted rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">{content.likes}</div>
                  <div className="text-xs text-muted-foreground">Likes</div>
                </div>
                <div className="bg-muted rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">{content.rating}</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
