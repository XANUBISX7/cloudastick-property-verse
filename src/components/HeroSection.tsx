
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, MousePointer } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("user-needs-form");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen bg-cloudastick-black text-cloudastick-white flex items-center"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(246, 217, 132, 0.15), transparent 50%)`
      }}
    >
      {/* Dots pattern overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-cloudastick-gold rounded-full"
            style={{
              width: Math.random() * 8 + 2 + "px",
              height: Math.random() * 8 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: Math.random() * 10 + 10 + "s",
            }}
          />
        ))}
      </div>

      <div className="container-custom z-10">
        <div 
          className="max-w-4xl mx-auto text-center"
          style={{
            transform: `translate3d(${mousePosition.x * -20}px, ${mousePosition.y * -20}px, 0px)`,
          }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Elevate Your Real Estate Business with{" "}
            <span className="text-cloudastick-gold">Salesforce</span> Power
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Transform your property management with our intelligent Salesforce-powered solution. 
            Streamline operations, boost sales, and deliver exceptional client experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              className="btn-secondary text-lg"
              size="lg"
            >
              Explore Smart Real Estate
            </Button>
            <Button
              className="bg-transparent border-2 border-cloudastick-white text-cloudastick-white hover:bg-cloudastick-white hover:text-cloudastick-black transition-all text-lg"
              size="lg"
            >
              See How It Works
            </Button>
          </div>

          <div className="relative mt-8">
            <MousePointer className="w-6 h-6 mx-auto opacity-70 animate-bounce" />
            <p className="text-sm opacity-60 mt-2">Interact with the page</p>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToNextSection}
          className="flex flex-col items-center text-cloudastick-white opacity-70 hover:opacity-100 transition-opacity"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>

      {/* 3D effect buildings silhouette */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 opacity-30"
        style={{
          transform: `translate3d(${mousePosition.x * 30}px, 0, 0px)`,
          background: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxNTAiIHZpZXdCb3g9IjAgMCAxNDQwIDE1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAxNTBIMTQ0MFYwQzEzMjAgMzMuMyAxMjAwIDUwIDEwODAgNTBDOTYwIDUwIDg0MCAzMy4zIDcyMCAwQzYwMCAxNi43IDQ4MCAyNSAzNjAgMjVDMjQwIDI1IDEyMCAxNi43IDAgMFYxNTBaIiBmaWxsPSIjRkZGRkZGIi8+PC9zdmc+') bottom center",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default HeroSection;
