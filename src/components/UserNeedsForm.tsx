
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ArrowRight, Home, DollarSign, Calendar, MapPin } from "lucide-react";
import { toast } from "sonner";

type UserNeedsData = {
  budget: number;
  bedrooms: string;
  moveInDate: string;
  location: string;
  name: string;
  email: string;
};

const UserNeedsForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<UserNeedsData>({
    budget: 500000,
    bedrooms: "",
    moveInDate: "",
    location: "",
    name: "",
    email: "",
  });

  const handleNextStep = () => {
    if (step === 1 && (!formData.bedrooms || !formData.location)) {
      toast.error("Please complete all fields before continuing");
      return;
    }
    
    if (step === 2 && (!formData.name || !formData.email)) {
      toast.error("Please provide your contact information");
      return;
    }
    
    if (step < 2) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    toast.success("Thank you! We'll find the perfect properties for you.");
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
    // setTimeout to simulate API response
    setTimeout(() => {
      document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  const formatBudget = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleBudgetChange = (value: number[]) => {
    setFormData({ ...formData, budget: value[0] });
  };

  return (
    <section id="user-needs-form" className="py-20 bg-gradient-to-b from-cloudastick-white to-cloudastick-lightgray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Find Your Dream Property</h2>
          <p className="section-subtitle">
            Tell us what you're looking for, and we'll match you with the perfect properties
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cloudastick-gold text-cloudastick-black flex items-center justify-center">
                {step}
              </span> 
              {step === 1 ? "Property Requirements" : "Contact Information"}
            </CardTitle>
            <CardDescription>
              {step === 1 ? "Tell us what you're looking for" : "How should we contact you?"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {step === 1 ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-cloudastick-gold" />
                    <Label htmlFor="budget">Budget Range</Label>
                  </div>
                  <Slider 
                    id="budget"
                    defaultValue={[formData.budget]} 
                    max={2000000} 
                    min={100000} 
                    step={50000}
                    onValueChange={handleBudgetChange}
                    className="py-4"
                  />
                  <div className="text-right font-bold text-lg">
                    {formatBudget(formData.budget)}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-cloudastick-gold" />
                    <Label htmlFor="bedrooms">Number of Bedrooms</Label>
                  </div>
                  <Select
                    value={formData.bedrooms}
                    onValueChange={(value) => setFormData({ ...formData, bedrooms: value })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Bedroom</SelectItem>
                      <SelectItem value="2">2 Bedrooms</SelectItem>
                      <SelectItem value="3">3 Bedrooms</SelectItem>
                      <SelectItem value="4">4+ Bedrooms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cloudastick-gold" />
                    <Label htmlFor="moveInDate">Preferred Move-in Date</Label>
                  </div>
                  <Input
                    id="moveInDate"
                    type="date"
                    value={formData.moveInDate}
                    onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cloudastick-gold" />
                    <Label htmlFor="location">Preferred Location</Label>
                  </div>
                  <Select
                    value={formData.location}
                    onValueChange={(value) => setFormData({ ...formData, location: value })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Downtown</SelectItem>
                      <SelectItem value="suburbs">Suburbs</SelectItem>
                      <SelectItem value="beach">Beach Area</SelectItem>
                      <SelectItem value="countryside">Countryside</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button 
                variant="outline" 
                onClick={() => setStep(step - 1)}
              >
                Back
              </Button>
            )}
            <Button 
              className={`ml-auto bg-cloudastick-black text-cloudastick-white hover:bg-opacity-90 ${step === 1 && 'w-full'}`} 
              onClick={handleNextStep}
            >
              {step === 2 ? "Find Properties" : "Next"} 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default UserNeedsForm;
