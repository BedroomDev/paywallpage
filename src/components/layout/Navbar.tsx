import React from "react";
import { Link } from "react-router-dom";
import { Search, Menu, Bell, Upload, User } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface NavbarProps {
  isLoggedIn?: boolean;
  username?: string;
  avatarUrl?: string;
}

const Navbar = ({
  isLoggedIn = false,
  username = "User",
  avatarUrl = "",
}: NavbarProps) => {
  return (
    <nav className="w-full h-[70px] px-4 md:px-6 lg:px-8 bg-background border-b flex items-center justify-between sticky top-0 z-50">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">CP</span>
          </div>
          <span className="text-xl font-bold hidden md:block">CreatorPay</span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex relative max-w-md w-full mx-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search creators or content..."
          className="pl-10 w-full"
        />
      </div>

      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
      </Button>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          to="/discover"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Discover
        </Link>
        <Link
          to="/categories"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Categories
        </Link>
        <Link
          to="/trending"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Trending
        </Link>

        {isLoggedIn ? (
          <>
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            {/* Upload Button */}
            <Button size="sm" className="gap-1">
              <Upload className="h-4 w-4" />
              <span>Upload</span>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 h-8 w-8 rounded-full">
                  <Avatar>
                    <AvatarImage
                      src={
                        avatarUrl ||
                        `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`
                      }
                      alt={username}
                    />
                    <AvatarFallback>
                      {username.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/creator/1" className="flex w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard" className="flex w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="flex w-full">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/logout" className="flex w-full">
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
