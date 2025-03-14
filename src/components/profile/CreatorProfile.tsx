import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import ContentCard from "../shared/ContentCard";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Heart, Users, Calendar, ExternalLink, Share2 } from "lucide-react";

interface CreatorProfileProps {
  isLoggedIn?: boolean;
}

const CreatorProfile: React.FC<CreatorProfileProps> = ({
  isLoggedIn = false,
}) => {
  const { creatorId } = useParams<{ creatorId: string }>();

  // Mock creator data - in a real app, this would be fetched based on creatorId
  const creator = {
    id: creatorId || "1",
    name: "Alex Morgan",
    username: "alexmorgan",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    coverImage:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
    bio: "Digital artist specializing in cyberpunk illustrations and animations. Creating unique digital experiences for over 8 years.",
    followers: 12500,
    following: 245,
    joinDate: "January 2020",
    website: "https://alexmorgan.art",
    socialLinks: {
      twitter: "@alexmorganart",
      instagram: "@alexmorgan.art",
      youtube: "AlexMorganArt",
    },
    categories: ["Digital Art", "Animation", "3D Models"],
    isVerified: true,
  };

  // Mock content data
  const creatorContent = [
    {
      id: "1",
      title: "Cyberpunk City Collection",
      description:
        "A collection of 10 high-resolution cyberpunk city illustrations, perfect for backgrounds, wallpapers, or design projects.",
      price: 19.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&q=80",
      creatorName: creator.name,
      creatorAvatar: creator.avatar,
      category: "Digital Art",
      likes: 342,
      isLiked: false,
      downloads: 128,
      releaseDate: "2023-10-15",
    },
    {
      id: "2",
      title: "Neon Character Pack",
      description:
        "5 fully rigged 3D character models with neon aesthetics, ready for animation and game development.",
      price: 34.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=400&q=80",
      creatorName: creator.name,
      creatorAvatar: creator.avatar,
      category: "3D Models",
      likes: 215,
      isLiked: true,
      downloads: 76,
      releaseDate: "2023-08-22",
    },
    {
      id: "3",
      title: "Futuristic UI Elements",
      description:
        "A comprehensive pack of futuristic UI elements for web and mobile interfaces, including buttons, menus, and HUD components.",
      price: 24.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=400&q=80",
      creatorName: creator.name,
      creatorAvatar: creator.avatar,
      category: "UI Design",
      likes: 187,
      isLiked: false,
      downloads: 92,
      releaseDate: "2023-11-05",
    },
    {
      id: "4",
      title: "Animation Masterclass",
      description:
        "A comprehensive video course on creating stunning digital animations with industry-standard tools and techniques.",
      price: 49.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
      creatorName: creator.name,
      creatorAvatar: creator.avatar,
      category: "Education",
      likes: 423,
      isLiked: false,
      downloads: 156,
      releaseDate: "2023-07-10",
    },
    {
      id: "5",
      title: "Holographic Textures",
      description:
        "20 high-resolution holographic textures for 3D modeling, graphic design, and digital art projects.",
      price: 14.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&q=80",
      creatorName: creator.name,
      creatorAvatar: creator.avatar,
      category: "Textures",
      likes: 156,
      isLiked: true,
      downloads: 87,
      releaseDate: "2023-09-18",
    },
    {
      id: "6",
      title: "Sci-Fi Sound Effects",
      description:
        "A collection of 50 high-quality sci-fi sound effects for games, videos, and multimedia projects.",
      price: 17.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
      creatorName: creator.name,
      creatorAvatar: creator.avatar,
      category: "Audio",
      likes: 98,
      isLiked: false,
      downloads: 42,
      releaseDate: "2023-12-01",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar isLoggedIn={isLoggedIn} />

      {/* Cover Image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden bg-gray-100">
        <img
          src={creator.coverImage}
          alt={`${creator.name}'s cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Creator Info */}
      <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8">
          <Avatar className="w-32 h-32 border-4 border-background rounded-full">
            <AvatarImage src={creator.avatar} alt={creator.name} />
            <AvatarFallback>{creator.name.substring(0, 2)}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold text-white md:text-foreground">
                {creator.name}
              </h1>
              {creator.isVerified && (
                <Badge variant="secondary" className="bg-blue-500 text-white">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">@{creator.username}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>Follow</span>
            </Button>
          </div>
        </div>

        {/* Creator Stats & Bio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-muted-foreground mb-4">{creator.bio}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {creator.categories.map((category, index) => (
                <Badge key={index} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>

            {creator.website && (
              <a
                href={creator.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{creator.website}</span>
              </a>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex flex-col items-center">
                  <Users className="h-5 w-5 mb-1 text-muted-foreground" />
                  <span className="font-bold">
                    {creator.followers.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Followers
                  </span>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex flex-col items-center">
                  <Users className="h-5 w-5 mb-1 text-muted-foreground" />
                  <span className="font-bold">
                    {creator.following.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Following
                  </span>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex flex-col items-center">
                  <Calendar className="h-5 w-5 mb-1 text-muted-foreground" />
                  <span className="font-bold">Since</span>
                  <span className="text-xs text-muted-foreground">
                    {creator.joinDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="digital-art">Digital Art</TabsTrigger>
            <TabsTrigger value="3d-models">3D Models</TabsTrigger>
            <TabsTrigger value="education">Courses</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {creatorContent.map((content) => (
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

          <TabsContent value="digital-art" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {creatorContent
                .filter((content) => content.category === "Digital Art")
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

          <TabsContent value="3d-models" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {creatorContent
                .filter((content) => content.category === "3D Models")
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

          <TabsContent value="education" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {creatorContent
                .filter((content) => content.category === "Education")
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

          <TabsContent value="audio" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {creatorContent
                .filter((content) => content.category === "Audio")
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

export default CreatorProfile;
