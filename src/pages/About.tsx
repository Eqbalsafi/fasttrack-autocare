import { Shield, Users, Award, Heart, Target, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureItem } from "@/components/ui/FeatureItem";

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never compromise on the quality of parts or service. Your safety is our priority.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Every customer is treated like family. We listen, advise honestly, and deliver results.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Your time matters. We work quickly without cutting corners.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest pricing, transparent service. No hidden fees or unnecessary upsells.",
  },
];

const milestones = [
  { year: "2008", event: "Fast Track founded in Toronto" },
  { year: "2012", event: "Opened second location in Mississauga" },
  { year: "2016", event: "Expanded to Brampton" },
  { year: "2020", event: "Launched oil change & lube services" },
  { year: "2023", event: "Served 50,000+ customers" },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <HeroSection
        title="About Us"
        subtitle="Fast-Track Auto Care delivers fast, honest, and reliable tire and auto services, keeping you safe, confident, and moving forward every mile."
        showCTA={false}
      />

      {/* Our Story */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We started with one tire, one wrench, and a promise to never leave anyone stranded. Long nights, cold mornings, and scraped knuckles shaped our beginning. What kept us going wasn’t money—it was the belief that hard work and honesty still matter.
                </p>
                <p>
                  Every customer became more than a job; they became a story we cared about. From first-time drivers to hardworking families, we treated every vehicle like it carried someone we loved.
                </p>
                <p>
                  Today, we’re still driven by that same promise. We don’t just change tires—we keep lives moving, dreams rolling, and trust growing, mile after mile.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&h=450&fit=crop"
                  alt="Fast Track team"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 shadow-xl">
                <p className="text-3xl font-bold text-primary-foreground">50K+</p>
                <p className="text-sm text-primary-foreground/80">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These principles guide everything we do at Fast Track.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          
        </div>
      </section>

      {/* Team CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground sm:text-3xl">
            Join Our Team
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-primary-foreground/80">
            We're always looking for talented technicians who share our passion for quality service. Contact us to learn about career opportunities.
          </p>
          <a
            href="tel:+16406400097"
            className="inline-block rounded-lg bg-primary-foreground px-8 py-3 font-medium text-primary transition-colors hover:bg-primary-foreground/90"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
