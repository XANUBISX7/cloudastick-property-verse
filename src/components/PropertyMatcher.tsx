
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Home, 
  Calendar, 
  DollarSign, 
  Check, 
  CircleCheck
} from "lucide-react";

// Sample property data
const PROPERTIES = [
  {
    id: 1,
    name: "Luxury Downtown Apartment",
    price: 750000,
    matchPercentage: 95,
    location: "Downtown",
    description: "Modern luxury apartment with stunning city views and high-end finishes throughout.",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    features: ["Pool", "Gym", "Doorman", "Parking"],
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    availability: "Immediate"
  },
  {
    id: 2,
    name: "Suburban Family Home",
    price: 950000,
    matchPercentage: 88,
    location: "Suburbs",
    description: "Spacious family home in quiet neighborhood with large backyard and modern amenities.",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    features: ["Backyard", "Garage", "Fireplace", "Updated Kitchen"],
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    availability: "3 months"
  },
  {
    id: 3,
    name: "Beachfront Condo",
    price: 1250000,
    matchPercentage: 82,
    location: "Beach Area",
    description: "Beautiful beachfront condo with panoramic ocean views and resort-style amenities.",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    features: ["Ocean View", "Pool", "Hot Tub", "Private Beach Access"],
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    availability: "2 months"
  }
];

const PropertyMatcher = () => {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);

  return (
    <section id="properties" className="py-20 bg-cloudastick-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Matching Properties</h2>
          <p className="section-subtitle">
            Based on your preferences, we've found these perfect matches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map(property => (
            <Card key={property.id} className="overflow-hidden transition-all hover:shadow-xl group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={property.imageUrl} 
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-cloudastick-gold text-cloudastick-black flex items-center gap-1">
                  <CircleCheck className="w-3 h-3" />
                  <span>{property.matchPercentage}% Match</span>
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{property.name}</CardTitle>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" /> {property.location}
                </div>
                <div className="text-xl font-bold mt-2">
                  ${property.price.toLocaleString()}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between mb-4 text-sm">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" /> {property.bedrooms} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" /> {property.bathrooms} Baths
                  </div>
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-1" /> {property.sqft} sqft
                  </div>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {property.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {property.features.slice(0, 2).map(feature => (
                    <Badge key={feature} variant="outline" className="bg-muted">
                      {feature}
                    </Badge>
                  ))}
                  {property.features.length > 2 && (
                    <Badge variant="outline" className="bg-muted">
                      +{property.features.length - 2} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" /> 
                  Available: {property.availability}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="bg-cloudastick-black text-cloudastick-white hover:bg-opacity-90"
                      onClick={() => setSelectedProperty(property.id)}
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="sm:max-w-3xl">
                    {selectedProperty === property.id && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{property.name}</DialogTitle>
                          <DialogDescription className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" /> {property.location}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                          <div className="space-y-4">
                            <div className="rounded-md overflow-hidden">
                              <img 
                                src={property.imageUrl} 
                                alt={property.name}
                                className="w-full h-64 object-cover"
                              />
                            </div>
                            
                            <div className="bg-muted p-4 rounded-lg">
                              <h4 className="font-medium mb-2">Payment Calculator</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span>Price:</span>
                                  <span className="font-bold">${property.price.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Est. Monthly Payment:</span>
                                  <span className="font-bold">${Math.round(property.price * 0.005).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Down Payment (20%):</span>
                                  <span className="font-bold">${Math.round(property.price * 0.2).toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-medium mb-2">Property Details</h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                  <Bed className="h-4 w-4 mr-2 text-cloudastick-gold" />
                                  <span>{property.bedrooms} Bedrooms</span>
                                </div>
                                <div className="flex items-center">
                                  <Bath className="h-4 w-4 mr-2 text-cloudastick-gold" />
                                  <span>{property.bathrooms} Bathrooms</span>
                                </div>
                                <div className="flex items-center">
                                  <Home className="h-4 w-4 mr-2 text-cloudastick-gold" />
                                  <span>{property.sqft} sqft</span>
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2 text-cloudastick-gold" />
                                  <span>Available: {property.availability}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-2">Description</h4>
                              <p className="text-muted-foreground">{property.description}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-2">Features</h4>
                              <div className="grid grid-cols-2 gap-y-2">
                                {property.features.map(feature => (
                                  <div key={feature} className="flex items-center">
                                    <Check className="h-4 w-4 mr-2 text-cloudastick-gold" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-2">Match Score</h4>
                              <div className="flex items-center">
                                <div className="w-full bg-muted rounded-full h-2.5 mr-2">
                                  <div 
                                    className="bg-cloudastick-gold h-2.5 rounded-full" 
                                    style={{ width: `${property.matchPercentage}%` }}
                                  ></div>
                                </div>
                                <span className="font-bold">{property.matchPercentage}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <DialogFooter>
                          <Button 
                            className="bg-cloudastick-black text-cloudastick-white hover:bg-opacity-90 w-full sm:w-auto"
                          >
                            Schedule Viewing
                          </Button>
                        </DialogFooter>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-cloudastick-gold text-cloudastick-black hover:bg-opacity-90"
            size="lg"
          >
            Load More Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyMatcher;
