import React from "react";
import { Link } from "react-router-dom";
import CompanyNavbar from "../layout/CompanyNavbar";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FileText, Users, DollarSign, Shield } from "lucide-react";

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      bio: "Former tech executive with a passion for knowledge sharing and creator economy.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      bio: "Full-stack developer with 15+ years experience building marketplace platforms.",
    },
    {
      name: "Aisha Patel",
      role: "Head of Creator Relations",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=aisha",
      bio: "Content creator turned tech executive helping creators monetize their knowledge.",
    },
    {
      name: "David Rodriguez",
      role: "Head of Marketing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      bio: "Digital marketing expert specializing in marketplace growth and creator economy.",
    },
  ];

  const values = [
    {
      title: "Quality Content",
      description:
        "We believe in promoting high-quality, valuable digital resources that truly help people learn and grow.",
      icon: <FileText className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Creator First",
      description:
        "Our platform is built with creators in mind, offering the tools and support they need to succeed.",
      icon: <Users className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Fair Compensation",
      description:
        "We offer some of the highest revenue shares in the industry because we believe creators should be fairly compensated.",
      icon: <DollarSign className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Trust & Security",
      description:
        "We prioritize the security of both creators and customers, with robust systems to protect content and payments.",
      icon: <Shield className="h-10 w-10 text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <CompanyNavbar isLoggedIn={false} />

      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About KnowledgePay
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're on a mission to help creators monetize their expertise and
            knowledge through premium digital content.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
            asChild
          >
            <Link to="/signup">Join Our Community</Link>
          </Button>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                KnowledgePay was founded in 2023 with a simple idea: to create a
                platform where experts and creators could easily monetize their
                knowledge and digital resources.
              </p>
              <p>
                Our founder, Sarah Johnson, experienced firsthand the challenges
                of selling digital content online. Existing platforms either
                took too large a commission, lacked proper tools for creators,
                or didn't provide adequate protection for digital assets.
              </p>
              <p>
                Drawing from her background in technology and marketplace
                development, Sarah assembled a team of experts to build
                KnowledgePay - a platform specifically designed for knowledge
                creators, with fair revenue sharing, powerful creator tools, and
                robust content protection.
              </p>
              <p>
                Today, KnowledgePay hosts thousands of creators sharing premium
                digital resources across dozens of categories - from software
                development to financial analysis, creative assets to
                educational courses.
              </p>
              <p>
                We're proud to have helped creators earn millions in revenue
                while providing valuable resources to professionals and learners
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-yellow-500 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to share your knowledge?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our community of creators and start monetizing your expertise
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white"
              asChild
            >
              <Link to="/signup">Become a Creator</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
