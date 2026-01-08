import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TireCard } from "@/components/cards/TireCard";

// Import tire images
import winterTireImage from "@/assets/tires/winter-tire.jpeg";
import suvTireImage from "@/assets/tires/suv-tire.jpg";
import performanceTireImage from "@/assets/tires/performance-tire.jpg";
import allSeasonTireImage from "@/assets/car-wheel-with-new-tires-close-up.jpg";

/**
 * Data for different tire types.
 */
const tireTypes = [
  {
    title: "Summer & All-Season Tires",
    description: "Perfect for Canadian spring, summer, and fall driving conditions. Excellent grip on dry and wet roads.",
    imageUrl: allSeasonTireImage,
    features: [
      "Optimized for warm weather performance",
      "Enhanced fuel efficiency",
      "Quiet and comfortable ride",
      "Long tread life",
    ],
  },
  {
    title: "Winter Tires",
    description: "Essential for Canadian winters. Superior traction on snow, ice, and cold pavement for maximum safety.",
    imageUrl: winterTireImage,
    features: [
      "Designed for temperatures below 7°C",
      "Deep treads for snow traction",
      "Soft rubber compound for ice grip",
      "3PMSF certified for severe conditions",
    ],
  },
  {
    title: "Truck & SUV Tires",
    description: "Heavy-duty tires built for trucks, SUVs, and crossovers. Handle extra weight and rough terrain with ease.",
    imageUrl: suvTireImage,
    features: [
      "Reinforced sidewalls",
      "All-terrain or highway options",
      "Higher load capacity",
      "Durable construction",
    ],
  },
  {
    title: "Performance Tires",
    description: "For drivers who demand more. Enhanced handling, grip, and responsiveness for spirited driving.",
    imageUrl: performanceTireImage,
    features: [
      "Superior cornering grip",
      "High-speed rated",
      "Responsive steering",
      "Sport-tuned design",
    ],
  },
];

/**
 * Data for tire brands.
 */
const brands = [
  { name: "Michelin", description: "Premium performance and longevity" },
  { name: "Goodyear", description: "American quality and innovation" },
  { name: "Bridgestone", description: "Japanese engineering excellence" },
  { name: "Continental", description: "German precision and safety" },
  { name: "Pirelli", description: "Italian style meets performance" },
  { name: "BFGoodrich", description: "Rugged all-terrain specialists" },
  { name: "Toyo", description: "Value and reliability combined" },
  { name: "Hankook", description: "Advanced technology, great value" },
];

/**
 * Section component for displaying tire types.
 */
function TireTypesSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Choose Your <span className="text-primary">Tires</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            We carry a wide selection of tires for every vehicle and driving style. Our experts will help you find the perfect match.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {tireTypes.map((tire) => (
            <TireCard key={tire.title} {...tire} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Section component for winter tire alert.
 */
function WinterAlertSection() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="text-6xl">❄️</div>
          <div className="flex-1">
            <h2 className="mb-2 text-2xl font-bold text-primary-foreground sm:text-3xl">
              Canadian Winter Ready?
            </h2>
            <p className="text-primary-foreground/80">
              Winter tires are essential for Canadian winters. They provide up to 50% better traction on snow and ice compared to all-season tires. Don't wait until the first snowfall!
            </p>
          </div>
          <a
            href="tel:+16406400097"
            className="shrink-0 rounded-lg bg-primary-foreground px-6 py-3 font-bold text-primary transition-colors hover:bg-primary-foreground/90"
          >
            Book Your Swap
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * Section component for displaying tire brands.
 */
function BrandsSection() {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Brands We <span className="text-primary">Carry</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We partner with the world's leading tire manufacturers to bring you quality and variety.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="rounded-lg border border-border bg-background p-6 text-center transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 text-xl font-bold text-foreground">{brand.name}</h3>
              <p className="text-sm text-muted-foreground">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Main Tires page component.
 */
export default function Tires() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeroSection
        title="Tire Types"
        subtitle="Find the perfect tires for your vehicle and driving conditions."
        showCTA={true}
      />
      <TireTypesSection />
      <WinterAlertSection />
      <BrandsSection />
      <Footer />
    </div>
  );
}
