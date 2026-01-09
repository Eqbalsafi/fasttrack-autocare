import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, Award, Users, Wrench, Droplets, CircleDot, Settings, Zap, DollarSign, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FeatureItem } from "@/components/ui/FeatureItem";
import TireSlideshow from "@/components/slideshow/Slideshow";

// Import service images
import tiresImage from "@/assets/services/new_old_tyre.jpg";
import installationImage from "@/assets/services/tire-balancing.jpeg";
import seasonalImage from "@/assets/services/tire-instal.jpg";
import oilChangeImage from "@/assets/services/oil_change.jpg";
import brakeServiceImage from "@/assets/services/brake-service.jpg";
import rimsImage from "@/assets/services/rims.jpg";

const services = [
  {
    imageUrl: tiresImage,
    title: "New & Used Tires",
    description: "Quality new and used tires for all vehicle types at affordable prices.",
  },
  {
    imageUrl: installationImage,
    title: "Tire Installation & Balancing",
    description: "Professional mounting and balancing for smooth, safe rides.",
  },
  {
    imageUrl: seasonalImage,
    title: "Seasonal Tire Change",
    description: "Quick winter/summer tire changeovers when you need them.",
  },
  {
    imageUrl: oilChangeImage,
    title: "Oil Change & Lube",
    description: "Fast, quality oil changes to keep your engine running smooth.",
  },
  {
    imageUrl: brakeServiceImage,
    title: "Brake Services",
    description: "We provide brake pad replacement, rotor resurfacing or replacement, and full brake inspections to keep your stopping power reliable.",
  },
  {
    imageUrl: rimsImage,
    title: "Rims & Custom Wheels",
    description: "Upgrade your vehicle with new or custom rims. We offer professional installation and fitment for style and performance.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Quick Turnaround",
    description: "Get in and out fast with our efficient service process.",
  },
  {
    icon: Award,
    title: "Experienced Technicians",
    description: "Our skilled team handles all your automotive needs with expertise.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Quality service at competitive prices you can trust.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Workmanship",
    description: "We take pride in delivering top-notch results every time.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction First",
    description: "Your satisfaction is our top priority on every job.",
  },
];

const brands = [
  "Michelin",
  "Goodyear",
  "Bridgestone",
  "Continental",
  "Pirelli",
  "BFGoodrich",
];

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="home-body relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <TireSlideshow />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 z-10 bg-black/50" />

        <div className="container relative z-20 mx-auto px-4">
          <div className="text-center text-white">
            <div className="mb-4 inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
              🇨🇦 Serving Mississauga
            </div>
            <h1 className="animate-fade-in mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Tire & Lube
              <span className="block text-primary">Experts</span>
            </h1>
            <p className="animate-fade-in mx-auto mb-8 max-w-2xl text-lg sm:text-xl md:text-2xl text-white/90">
              Fast, reliable tire services and oil changes in Mississauga. Quality you can trust, prices you'll love.
            </p>

            <div className="animate-fade-in flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CallButton size="lg" className="gap-2 bg-primary px-8 text-lg hover:bg-primary/90 text-white border-white/20">
                <Phone className="h-5 w-5" />
                Call Now
              </CallButton>
              <WhatsAppButton
                size="lg"
                variant="outline"
                className="gap-2 border-white/50 px-8 text-lg text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From tire sales to oil changes, we've got all your automotive needs covered.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Why Choose <span className="text-primary">Fast Track?</span>
              </h2>
              <p className="mb-8 text-muted-foreground">
                We're committed to providing top-quality service with honesty and integrity. 
                Our experienced team ensures your vehicle gets the care it deserves.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {features.slice(0, 4).map((feature) => (
                  <FeatureItem key={feature.title} {...feature} />
                ))}
              </div>
              <div className="mt-6">
                <FeatureItem {...features[4]} />
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                  alt="Professional tire service"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 shadow-xl">
                <p className="text-3xl font-bold text-primary-foreground">Fast</p>
                <p className="text-sm text-primary-foreground/80">& Reliable Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tire Brands Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Trusted Brands</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We carry top tire brands to ensure quality and performance for every vehicle.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex h-20 items-center justify-center rounded-lg bg-card px-8 text-lg font-bold text-muted-foreground transition-colors hover:text-foreground"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            Contact us today for a free quote or to schedule your service appointment.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CallButton size="lg" variant="secondary" className="gap-2 px-8 text-lg">
              <Phone className="h-5 w-5" />
              (+1) 647-640-0097
            </CallButton>
            <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 px-8 text-lg text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
