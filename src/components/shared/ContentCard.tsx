import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Heart, Download } from "lucide-react";

interface ContentCardProps {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  currency?: string;
  imageUrl?: string;
  creatorName?: string;
  creatorAvatar?: string;
  category?: string;
  likes?: number;
  isLiked?: boolean;
  onClick?: () => void;
}

const ContentCard = ({
  id = "1",
  title = "Digital Art Collection",
  description = "A stunning collection of digital artwork featuring abstract landscapes and futuristic designs.",
  price = 9.99,
  currency = "USD",
  imageUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
  creatorName = "Jane Artist",
  creatorAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
  category = "Digital Art",
  likes = 42,
  isLiked = false,
  onClick = () => console.log("Card clicked"),
}: ContentCardProps) => {
  return (
    <Card
      className="w-full max-w-[300px] overflow-hidden transition-all duration-200 hover:shadow-lg bg-white"
      onClick={onClick}
    >
      <div className="relative h-40 w-full overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
        />
        <Badge className="absolute right-2 top-2 bg-primary/90">
          {`${currency} ${price.toFixed(2)}`}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={creatorAvatar} alt={creatorName} />
              <AvatarFallback>{creatorName.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{creatorName}</span>
          </div>
          <Badge variant="outline" className="bg-gray-100">
            {category}
          </Badge>
        </div>
        <h3 className="mt-2 line-clamp-1 text-lg font-semibold">{title}</h3>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <p className="line-clamp-2 text-sm text-gray-500">{description}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-gray-600"
        >
          <Heart
            className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
          />
          <span>{likes}</span>
        </Button>
        <Link to={`/content/${id}`}>
          <Button size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span>Preview</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
