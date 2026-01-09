import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/car-services.jpg";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  backgroundImage?: string;
}

export function HeroSection({ title, subtitle, showCTA = true, backgroundImage }: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-card py-20 md:min-h-[70vh]"
      style={
        backgroundImage || aboutImage
          ? { 
              backgroundImage: `url(${backgroundImage || aboutImage})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed"
            }
          : undefined
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />

      {/* Decorative Elements */}
      <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-20 bottom-1/4 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="animate-fade-in mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="animate-fade-in mx-auto mb-8 max-w-2xl text-lg text-muted-foreground delay-100 sm:text-xl md:text-2xl">
          {subtitle}
        </p>

        {showCTA && (
          <div className="animate-fade-in flex flex-col items-center justify-center gap-4 delay-200 sm:flex-row">
            <Button asChild size="lg" className="gap-2 bg-primary px-8 text-lg hover:bg-primary/90">
              <a href="tel:+16476400097">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary/50 px-8 text-lg hover:bg-primary/10"
            >
              <a href="https://wa.me/+16476400097" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
