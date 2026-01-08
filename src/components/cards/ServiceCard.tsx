import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function ServiceCard({ imageUrl, title, description }: ServiceCardProps) {
  return (
    <Card className="group border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <CardContent className="p-6">
        <div className="mb-4 flex h-32 w-full items-center justify-center rounded-lg bg-primary/5 overflow-hidden transition-all group-hover:scale-105">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
