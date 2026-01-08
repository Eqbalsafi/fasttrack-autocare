import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Import images
import tireWarehouse1 from "@/assets/dark-storage-full-big-variety-new-tyres-busy-warehouse.jpg";
import tireCloseUp from "@/assets/car-wheel-with-new-tires-close-up.jpg";
import tireWarehouse2 from "@/assets/dark-storage-full-big-variety-new-tyres-busy-warehouse (1).jpg";

interface SlideData {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  altText?: string;
}

interface SlideshowProps {
  slides: SlideData[];
  className?: string;
  showDots?: boolean;
  showNavigation?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export function Slideshow({
  slides,
  className = "",
  showDots = false,  showNavigation = true,  autoPlay = false,
  interval = 5000,
}: SlideshowProps) {
  const [api, setApi] = React.useState<any>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api || !autoPlay) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, interval);

    return () => clearInterval(timer);
  }, [api, autoPlay, interval]);

  const onSelect = React.useCallback(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className={`relative ${className}`}>
      <Carousel 
        setApi={setApi} 
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-full min-h-[80vh]">
                {slide.imageUrl ? (
                  <img
                    src={slide.imageUrl}
                    alt={slide.altText || slide.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {slide.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>

      {showDots && (
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function TireSlideshow() {
  const tireSlides: SlideData[] = [
    {
      id: "1",
      title: "Premium Tire Selection",
      description: "Wide variety of high-quality tires for all vehicle types and driving conditions.",
      imageUrl: tireWarehouse1,
      altText: "Warehouse storage with variety of new tires"
    },
    {
      id: "2",
      title: "Professional Installation",
      description: "Expert tire mounting and balancing services for optimal performance and safety.",
      imageUrl: tireCloseUp,
      altText: "Close-up of car wheel with new tires"
    },
    {
      id: "3",
      title: "Complete Tire Solutions",
      description: "From selection to installation, we provide comprehensive tire services you can trust.",
      imageUrl: tireWarehouse2,
      altText: "Storage area with big variety of new tires"
    }
  ];

  return (
    <Slideshow
      slides={tireSlides}
      className="w-full h-full absolute inset-0"
      showDots={false}
      showNavigation={true}
      autoPlay={true}
      interval={5000}
    />
  );
}
