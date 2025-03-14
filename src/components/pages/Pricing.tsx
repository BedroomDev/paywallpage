import React from "react";
import { Link } from "react-router-dom";
import CompanyNavbar from "../layout/CompanyNavbar";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: "Basic",
      description: "Perfect for casual creators",
      price: "$9.99",
      period: "per month",
      features: [
        "Upload up to 10 resources",
        "Basic analytics",
        "Standard support",
        "90% revenue share",
        "Basic customization",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "For serious content creators",
      price: "$24.99",
      period: "per month",
      features: [
        "Upload up to 50 resources",
        "Advanced analytics",
        "Priority support",
        "95% revenue share",
        "Custom branding",
        "Early access to new features",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For companies and teams",
      price: "$99.99",
      period: "per month",
      features: [
        "Unlimited resources",
        "Comprehensive analytics",
        "Dedicated support",
        "97% revenue share",
        "Full customization",
        "API access",
        "Team management",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <CompanyNavbar isLoggedIn={false} />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for you and start sharing your
            knowledge with the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-yellow-500 shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-yellow-500 hover:bg-yellow-600" : ""}`}
                  asChild
                >
                  <Link to="/signup">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-8">
            Have more questions? Visit our{" "}
            <Link to="/faq" className="text-yellow-500 hover:underline">
              FAQ page
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="text-yellow-500 hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start sharing your knowledge?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of creators who are monetizing their expertise on our
            platform.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
            asChild
          >
            <Link to="/signup">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
