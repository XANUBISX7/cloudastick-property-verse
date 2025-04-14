
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cloudastick-black py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-cloudastick-white font-bold text-xl md:text-2xl">
            CLOUDASTICK
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-cloudastick-white hover:text-cloudastick-gold transition-colors"
          >
            Features
          </a>
          <a
            href="#properties"
            className="text-cloudastick-white hover:text-cloudastick-gold transition-colors"
          >
            Properties
          </a>
          <a
            href="#solutions"
            className="text-cloudastick-white hover:text-cloudastick-gold transition-colors"
          >
            Business Solutions
          </a>
          <Button className="bg-cloudastick-gold text-cloudastick-black hover:bg-opacity-90">
            Book a Demo
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-cloudastick-white"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cloudastick-black p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-cloudastick-white hover:text-cloudastick-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#properties"
              className="text-cloudastick-white hover:text-cloudastick-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Properties
            </a>
            <a
              href="#solutions"
              className="text-cloudastick-white hover:text-cloudastick-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Business Solutions
            </a>
            <Button 
              className="bg-cloudastick-gold text-cloudastick-black hover:bg-opacity-90 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
