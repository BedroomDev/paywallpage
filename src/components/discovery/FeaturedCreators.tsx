import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CreatorProps {
  id: string;
  name: string;
  image: string;
  description: string;
  followers: number;
  category: string;
}

interface FeaturedCreatorsProps {
  creators?: CreatorProps[];
  title?: string;
  description?: string;
}

const FeaturedCreators = ({
  creators = [
    {
      id: "1",
      name: "Alex Morgan",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      description:
        "Digital artist specializing in cyberpunk illustrations and animations",
      followers: 12500,
      category: "Digital Art",
    },
    {
      id: "2",
      name: "Jamie Chen",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie",
      description: "Music producer creating ambient electronic soundscapes",
      followers: 8700,
      category: "Music",
    },
    {
      id: "3",
      name: "Taylor Reed",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor",
      description: "Fantasy writer with a series of exclusive short stories",
      followers: 15200,
      category: "Writing",
    },
    {
      id: "4",
      name: "Jordan Smith",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan",
      description: "Street photographer capturing urban life around the world",
      followers: 9300,
      category: "Photography",
    },
    {
      id: "5",
      name: "Riley Johnson",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=riley",
      description:
        "3D modeler creating downloadable assets for game developers",
      followers: 7800,
      category: "3D Modeling",
    },
    {
      id: "6",
      name: "Casey Williams",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=casey",
      description:
        "Indie filmmaker sharing exclusive behind-the-scenes content",
      followers: 11400,
      category: "Film",
    },
  ],
  title = "Featured Creators",
  description = "Discover talented creators sharing exclusive content",
}: FeaturedCreatorsProps) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-background py-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface CreatorCardProps {
  creator: CreatorProps;
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
  return (
    <Card
      className={cn(
        "min-w-[250px] max-w-[250px] bg-card",
        "hover:shadow-lg transition-shadow duration-200",
      )}
    >
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <Avatar className="h-12 w-12 border-2 border-primary">
          <AvatarImage src={creator.image} alt={creator.name} />
          <AvatarFallback>{creator.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-base">{creator.name}</CardTitle>
          <CardDescription className="text-xs">
            {creator.category}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-3">{creator.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-xs text-muted-foreground">
          {creator.followers.toLocaleString()} followers
        </span>
        <Button size="sm" variant="secondary">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeaturedCreators;
