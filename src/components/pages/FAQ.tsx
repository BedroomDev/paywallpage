import React from "react";
import { Link } from "react-router-dom";
import CompanyNavbar from "../layout/CompanyNavbar";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ: React.FC = () => {
  const faqCategories = [
    {
      category: "For Creators",
      questions: [
        {
          question: "How do I become a creator on KnowledgePay?",
          answer:
            "To become a creator, simply sign up for an account and select 'Creator Account' during registration. Once your account is verified, you can start uploading and selling your digital content through our platform.",
        },
        {
          question: "What types of content can I sell?",
          answer:
            "You can sell a wide variety of digital content including e-books, research reports, code templates, design assets, educational courses, software tools, and more. All content must be original or you must have the rights to sell it.",
        },
        {
          question: "How much does it cost to sell on KnowledgePay?",
          answer:
            "KnowledgePay operates on a revenue-sharing model. We take a small percentage of each sale (5-10% depending on your plan), and you keep the rest. There are no upfront fees or monthly charges to list your content.",
        },
        {
          question: "When and how do I get paid?",
          answer:
            "Payments are processed on a monthly basis. Once your earnings reach the minimum threshold of $50, we'll send payment via your preferred method (PayPal, bank transfer, or other supported payment methods).",
        },
        {
          question: "How do I protect my content from unauthorized sharing?",
          answer:
            "KnowledgePay implements several security measures including watermarking, download limits, secure file hosting, and copyright protection. We also have systems to detect and prevent unauthorized sharing of purchased content.",
        },
      ],
    },
    {
      category: "For Customers",
      questions: [
        {
          question: "How do I purchase content on KnowledgePay?",
          answer:
            "To purchase content, create an account, browse our marketplace, and select the content you're interested in. You can pay using credit/debit cards, PayPal, or other supported payment methods.",
        },
        {
          question: "Can I preview content before purchasing?",
          answer:
            "Yes, most content on KnowledgePay includes preview sections or samples that you can access before making a purchase. This helps you ensure the content meets your needs.",
        },
        {
          question: "What happens after I purchase content?",
          answer:
            "After purchase, you'll have immediate access to download the content. You can also access all your purchased content at any time through your account dashboard.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer refunds on a case-by-case basis. If the content significantly misrepresents what was advertised or has technical issues, please contact our support team within 7 days of purchase.",
        },
        {
          question: "Can I share purchased content with others?",
          answer:
            "Purchased content is for personal use only and should not be shared with others. Each purchase grants a single-user license. For team or company-wide access, please check if the creator offers multi-user licenses.",
        },
      ],
    },
    {
      category: "Account & Billing",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "Click the 'Sign Up' button in the top right corner of the homepage. Fill out the registration form with your details, verify your email address, and your account will be ready to use.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit and debit cards (Visa, Mastercard, American Express), PayPal, and in some regions, we support bank transfers and other local payment methods.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Yes, we use industry-standard encryption and security measures to protect your payment information. We partner with trusted payment processors and do not store your full credit card details on our servers.",
        },
        {
          question: "How do I update my billing information?",
          answer:
            "You can update your billing information in your account settings under the 'Billing' section. Here you can add or remove payment methods and update your billing address.",
        },
        {
          question: "Can I upgrade or downgrade my creator plan?",
          answer:
            "Yes, you can change your creator plan at any time through your account settings. When upgrading, you'll have immediate access to new features. When downgrading, changes will take effect at the end of your current billing cycle.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <CompanyNavbar isLoggedIn={false} />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about using KnowledgePay as a
            creator or customer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`item-${index}-${faqIndex}`}
                  >
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8">
            If you couldn't find the answer to your question, please contact our
            support team.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
            asChild
          >
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
