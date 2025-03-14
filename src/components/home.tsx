import React from "react";
import { Link } from "react-router-dom";
import CompanyNavbar from "./layout/CompanyNavbar";
import FeaturedCreators from "./discovery/FeaturedCreators";
import CategoryBrowser from "./discovery/CategoryBrowser";
import TrendingContent from "./discovery/TrendingContent";
import { Button } from "./ui/button";
import { ArrowRight, Search } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <CompanyNavbar isLoggedIn={false} />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Premium Digital Resources from Industry Experts
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[700px]">
            Access exclusive digital content from specialized companies.
            Purchase and download code, software, reports, and documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search companies or resources..."
                className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background"
              />
            </div>
            <Button className="flex items-center gap-2">
              <span>Explore Now</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
      <FeaturedCreators
        title="Featured Companies"
        description="Discover specialized companies sharing premium digital resources"
      />

      {/* Categories Section */}
      <CategoryBrowser
        onCategorySelect={(category) =>
          console.log(`Selected category: ${category}`)
        }
      />

      {/* Trending Content Section */}
      <TrendingContent
        title="Trending Content"
        subtitle="Discover the most popular content from creators around the world"
      />

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
            Ready to Access Premium Resources?
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Join thousands of professionals who are accelerating their work with
            our premium digital resources. From code to reports, find exactly
            what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/guides"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Creator Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/copyright"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Copyright
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/twitter"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/instagram"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="/discord"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>© 2023 KnowledgePay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
