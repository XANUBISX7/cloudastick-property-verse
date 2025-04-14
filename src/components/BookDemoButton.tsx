
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const BookDemoButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showThreshold = 300;
      
      if (scrollY > showThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      <Button
        size="lg"
        className="bg-cloudastick-gold text-cloudastick-black hover:bg-opacity-90 shadow-lg flex items-center gap-2 px-6"
      >
        <Calendar className="h-5 w-5" />
        <span className="font-bold">Book a Demo</span>
      </Button>
    </div>
  );
};

export default BookDemoButton;
