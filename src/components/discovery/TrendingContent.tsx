import React from "react";
import ContentCard from "../shared/ContentCard";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface TrendingContentProps {
  title?: string;
  subtitle?: string;
  items?: Array<{
    id: string;
    title: string;
    description: string;
    price: number;
    currency: string;
    imageUrl: string;
    creatorName: string;
    creatorAvatar: string;
    category: string;
    likes: number;
    isLiked: boolean;
  }>;
}

const TrendingContent = ({
  title = "Trending Content",
  subtitle = "Discover the most popular content from creators around the world",
  items = [
    {
      id: "1",
      title: "Abstract Digital Art Collection",
      description:
        "A stunning collection of digital artwork featuring abstract landscapes and futuristic designs.",
      price: 9.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
      creatorName: "Jane Artist",
      creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      category: "Digital Art",
      likes: 42,
      isLiked: false,
    },
    {
      id: "2",
      title: "Ambient Music Pack Vol. 3",
      description:
        "Relaxing ambient soundscapes perfect for meditation, focus, or background music.",
      price: 14.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
      creatorName: "Sound Sculptor",
      creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sound",
      category: "Music",
      likes: 128,
      isLiked: true,
    },
    {
      id: "3",
      title: "Photography Masterclass",
      description:
        "Learn professional photography techniques from an award-winning photographer.",
      price: 29.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80",
      creatorName: "Photo Pro",
      creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=photo",
      category: "Education",
      likes: 87,
      isLiked: false,
    },
    {
      id: "4",
      title: "Sci-Fi Novel Series",
      description:
        "A trilogy of science fiction novels exploring the future of humanity in deep space.",
      price: 19.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80",
      creatorName: "Stella Writer",
      creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=stella",
      category: "Writing",
      likes: 65,
      isLiked: false,
    },
    {
      id: "5",
      title: "3D Character Models Pack",
      description:
        "High-quality 3D character models ready for animation and game development.",
      price: 49.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=400&q=80",
      creatorName: "3D Master",
      creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3d",
      category: "3D Models",
      likes: 112,
      isLiked: true,
    },
    {
      id: "6",
      title: "Watercolor Painting Course",
      description:
        "Learn the art of watercolor painting with step-by-step tutorials for all skill levels.",
      price: 24.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80",
      creatorName: "Artistic Soul",
      creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=artistic",
      category: "Art",
      likes: 94,
      isLiked: false,
    },
    {
      id: "7",
      title: "Productivity Planner Templates",
      description:
        "Digital planner templates to boost your productivity and organize your life.",
      price: 7.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80",
      creatorName: "Organized Mind",
      creatorAvatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=organized",
      category: "Productivity",
      likes: 156,
      isLiked: false,
    },
    {
      id: "8",
      title: "Cinematic Sound Effects",
      description:
        "Professional sound effects library for filmmakers and content creators.",
      price: 34.99,
      currency: "USD",
      imageUrl:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
      creatorName: "Audio Wizard",
      creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=audio",
      category: "Audio",
      likes: 78,
      isLiked: true,
    },
  ],
}: TrendingContentProps) => {
  return (
    <section className="w-full py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 mt-1">{subtitle}</p>
          </div>

          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <div className="flex space-x-1">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="digital-art">Digital Art</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="writing">Writing</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="3d-models">3D Models</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <ContentCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  currency={item.currency}
                  imageUrl={item.imageUrl}
                  creatorName={item.creatorName}
                  creatorAvatar={item.creatorAvatar}
                  category={item.category}
                  likes={item.likes}
                  isLiked={item.isLiked}
                  onClick={() => console.log(`Clicked on content: ${item.id}`)}
                />
              ))}
            </div>
          </TabsContent>

          {/* Other tab contents would filter the items by category */}
          <TabsContent value="digital-art" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items
                .filter((item) => item.category === "Digital Art")
                .map((item) => (
                  <ContentCard
                    key={item.id}
                    {...item}
                    onClick={() =>
                      console.log(`Clicked on content: ${item.id}`)
                    }
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="music" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items
                .filter(
                  (item) =>
                    item.category === "Music" || item.category === "Audio",
                )
                .map((item) => (
                  <ContentCard
                    key={item.id}
                    {...item}
                    onClick={() =>
                      console.log(`Clicked on content: ${item.id}`)
                    }
                  />
                ))}
            </div>
          </TabsContent>

          {/* Placeholder empty states for other tabs */}
          <TabsContent value="writing" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items
                .filter((item) => item.category === "Writing")
                .map((item) => (
                  <ContentCard
                    key={item.id}
                    {...item}
                    onClick={() =>
                      console.log(`Clicked on content: ${item.id}`)
                    }
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items
                .filter((item) => item.category === "Education")
                .map((item) => (
                  <ContentCard
                    key={item.id}
                    {...item}
                    onClick={() =>
                      console.log(`Clicked on content: ${item.id}`)
                    }
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="3d-models" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items
                .filter((item) => item.category === "3D Models")
                .map((item) => (
                  <ContentCard
                    key={item.id}
                    {...item}
                    onClick={() =>
                      console.log(`Clicked on content: ${item.id}`)
                    }
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="text-primary">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingContent;
