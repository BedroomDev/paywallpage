import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Music,
  Image,
  FileText,
  Video,
  Code,
  Brush,
  Camera,
  Film,
} from "lucide-react";

interface CategoryProps {
  categories?: CategoryItem[];
  onCategorySelect?: (category: string) => void;
}

interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const CategoryBrowser: React.FC<CategoryProps> = ({
  categories = [
    { id: "1", name: "Music", icon: "music", color: "bg-purple-100" },
    { id: "2", name: "Art", icon: "brush", color: "bg-blue-100" },
    { id: "3", name: "Photography", icon: "camera", color: "bg-green-100" },
    { id: "4", name: "Writing", icon: "fileText", color: "bg-yellow-100" },
    { id: "5", name: "Video", icon: "video", color: "bg-red-100" },
    { id: "6", name: "Code", icon: "code", color: "bg-gray-100" },
    { id: "7", name: "Design", icon: "image", color: "bg-pink-100" },
    { id: "8", name: "Film", icon: "film", color: "bg-indigo-100" },
  ],
  onCategorySelect = (category) =>
    console.log(`Selected category: ${category}`),
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "music":
        return <Music className="h-8 w-8" />;
      case "brush":
        return <Brush className="h-8 w-8" />;
      case "camera":
        return <Camera className="h-8 w-8" />;
      case "fileText":
        return <FileText className="h-8 w-8" />;
      case "video":
        return <Video className="h-8 w-8" />;
      case "code":
        return <Code className="h-8 w-8" />;
      case "image":
        return <Image className="h-8 w-8" />;
      case "film":
        return <Film className="h-8 w-8" />;
      default:
        return <Image className="h-8 w-8" />;
    }
  };

  return (
    <div className="w-full bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`cursor-pointer hover:shadow-md transition-shadow ${category.color} border-none`}
              onClick={() => onCategorySelect(category.name)}
            >
              <CardContent className="flex flex-col items-center justify-center p-4 h-full">
                <div className="mb-2">{getIcon(category.icon)}</div>
                <span className="text-sm font-medium">{category.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBrowser;
