
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UserNeedsForm from "@/components/UserNeedsForm";
import PropertyMatcher from "@/components/PropertyMatcher";
import B2BSection from "@/components/B2BSection";
import Footer from "@/components/Footer";
import BookDemoButton from "@/components/BookDemoButton";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Cloudastick | Salesforce Real Estate Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-cloudastick-white">
      <Navigation />
      <HeroSection />
      <UserNeedsForm />
      <PropertyMatcher />
      <B2BSection />
      <Footer />
      <BookDemoButton />
    </div>
  );
};

export default Index;
