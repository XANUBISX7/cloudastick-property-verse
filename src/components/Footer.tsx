
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    toast.success("Thank you for subscribing!");
    form.reset();
  };

  return (
    <footer className="bg-cloudastick-black text-cloudastick-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">CLOUDASTICK</h3>
            <p className="text-gray-400 mb-6">
              Transform your real estate business with our Salesforce-powered solutions. Streamline operations and elevate customer experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cloudastick-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cloudastick-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cloudastick-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cloudastick-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-cloudastick-gold mr-3 mt-0.5" />
                <span>info@cloudastick.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-cloudastick-gold mr-3 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-cloudastick-gold mr-3 mt-0.5" />
                <span>123 Tech Park, San Francisco, CA 94107</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and property insights
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input 
                name="email"
                type="email" 
                placeholder="Your email address" 
                className="bg-cloudastick-purple text-cloudastick-white border-none"
              />
              <Button type="submit" className="bg-cloudastick-gold text-cloudastick-black hover:bg-opacity-90">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="#" className="text-sm text-gray-400 hover:text-cloudastick-gold transition-colors">
                Home
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-cloudastick-gold transition-colors">
                About Us
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-cloudastick-gold transition-colors">
                Services
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-cloudastick-gold transition-colors">
                Properties
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-cloudastick-gold transition-colors">
                Blog
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-cloudastick-gold transition-colors">
                Contact
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-cloudastick-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-cloudastick-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-400 md:text-right">
            &copy; {new Date().getFullYear()} Cloudastick. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
