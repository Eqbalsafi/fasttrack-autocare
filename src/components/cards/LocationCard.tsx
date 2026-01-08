import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
}

export function LocationCard({ name, address, phone, hours, mapUrl }: LocationCardProps) {
  return (
    <Card className="overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="aspect-video overflow-hidden bg-secondary">
        <iframe
          src={mapUrl}
          className="h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${name}`}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-4 text-xl font-bold text-foreground">{name}</h3>
        
        <ul className="mb-6 space-y-3">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm text-muted-foreground">{address}</span>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <a href={`tel:${phone.replace(/\D/g, "")}`} className="text-sm text-muted-foreground hover:text-primary">
              {phone}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm text-muted-foreground">{hours}</span>
          </li>
        </ul>

        <div className="flex gap-3">
          <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
            <a href={`tel:${phone.replace(/\D/g, "")}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10">
            <a href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
              <Navigation className="mr-2 h-4 w-4" />
              Directions
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
