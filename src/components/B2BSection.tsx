
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ChevronRight, Cloud, Zap, Share2, BarChart, Lock, Globe } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const B2BSection = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you for your inquiry! We'll be in touch soon.");
    // Here you would typically send the data to your API
    console.log("B2B form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="solutions" className="py-20 bg-cloudastick-black text-cloudastick-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">For Real Estate Companies</h2>
          <p className="section-subtitle">
            Supercharge your real estate business with our Salesforce-powered solution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-cloudastick-gold opacity-20"></div>
              <h3 className="text-3xl font-bold mb-6 relative z-10">
                The Ultimate Salesforce <br />
                <span className="text-cloudastick-gold">Property Management Solution</span>
              </h3>
            </div>
            
            <p className="text-lg opacity-80">
              Cloudastick transforms how real estate businesses operate by leveraging the full power of Salesforce. 
              Our comprehensive solution helps you manage properties, automate workflows, and deliver exceptional client experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-cloudastick-purple border-none text-cloudastick-white">
                <CardHeader className="pb-2">
                  <Cloud className="h-6 w-6 text-cloudastick-gold mb-2" />
                  <CardTitle className="text-lg">Cloud-Based</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-80">
                    Access your data anywhere, anytime with our secure cloud solution
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-cloudastick-purple border-none text-cloudastick-white">
                <CardHeader className="pb-2">
                  <Zap className="h-6 w-6 text-cloudastick-gold mb-2" />
                  <CardTitle className="text-lg">Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-80">
                    Automate repetitive tasks and free up your team for high-value activities
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-cloudastick-purple border-none text-cloudastick-white">
                <CardHeader className="pb-2">
                  <Share2 className="h-6 w-6 text-cloudastick-gold mb-2" />
                  <CardTitle className="text-lg">Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-80">
                    Seamlessly integrate with your existing tools and workflows
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-cloudastick-purple border-none text-cloudastick-white">
                <CardHeader className="pb-2">
                  <BarChart className="h-6 w-6 text-cloudastick-gold mb-2" />
                  <CardTitle className="text-lg">Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-80">
                    Make data-driven decisions with powerful reporting and analytics
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-secondary" size="lg">
                Explore Features <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="bg-transparent border-2 border-cloudastick-white hover:bg-cloudastick-white hover:text-cloudastick-black transition-all" size="lg">
                View Case Studies
              </Button>
            </div>

            <div className="flex gap-6 pt-4">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-cloudastick-gold mr-2" />
                <span className="text-sm opacity-80">Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-cloudastick-gold mr-2" />
                <span className="text-sm opacity-80">Global Support</span>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-cloudastick-white text-cloudastick-black border-none shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Demo</CardTitle>
                <CardDescription>
                  See how our solution can transform your real estate business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input 
                      id="company" 
                      name="company"
                      placeholder="Your company name" 
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your full name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="Your email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        placeholder="Your phone number" 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell us about your needs" 
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-cloudastick-black text-cloudastick-white hover:bg-opacity-90"
                    size="lg"
                  >
                    Request Demo
                  </Button>
                </form>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground text-center w-full">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
