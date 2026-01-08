import { Card, CardContent } from "@/components/ui/card";

interface TireCardProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export function TireCard({ title, description, imageUrl, features }: TireCardProps) {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="aspect-video overflow-hidden bg-secondary">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
