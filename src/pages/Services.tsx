import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCard } from "@/components/cards/ServiceCard";

// Import service images
import tiresImage from "@/assets/services/new_old_tyre.jpg";
import installationImage from "@/assets/services/tire-balancing.jpeg";
import seasonalImage from "@/assets/services/tire-instal.jpg";
import oilChangeImage from "@/assets/services/oil_change.jpg";
import brakeServiceImage from "@/assets/services/brake-service.jpg";
import rimsImage from "@/assets/services/rims.jpg";
import flatTire from "@/assets/services/flat-tire.jpg";
import tireRotation from "@/assets/services/tire-rotation.jpg";

const tireServices = [
  {
    imageUrl: tiresImage,
    title: "New & Used Tires",
    description: "Wide selection of quality new and used tires for all vehicle types. Expert recommendations based on your driving needs and budget.",
  },
  {
    imageUrl: installationImage,
    title: "Tire Installation & Balancing",
    description: "Professional mounting and balancing services to ensure smooth, safe rides. Quick turnaround times.",
  },
  {
    imageUrl: seasonalImage,
    title: "Seasonal Tire Change",
    description: "Hassle-free winter and summer tire changeovers. Be prepared for every season.",
  },
  {
    imageUrl: tireRotation,
    title: "Tire Rotation",
    description: "Regular tire rotations to promote even wear and extend the life of your tires.",
  },
  {
    imageUrl: rimsImage,
    title: "Rims & Wheels Services",
    description: "Upgrade your vehicle with new or custom rims. We offer professional installation and fitment for style and performance.",
  },
  {
    imageUrl: brakeServiceImage,
    title: "Brake Services",
    description: "We provide brake pad replacement, rotor resurfacing or replacement, and full brake inspections to keep your stopping power reliable.",
  },
   {
    imageUrl: flatTire,
    title: "Flat Tire Repair",
    description: "Quick and reliable puncture repairs to get you back on the road safely and affordably.",
  },
];

const lubeServices = [
  {
    imageUrl: oilChangeImage,
    title: "Oil Change & Lube Service",
    description: "Fast, quality oil changes using premium synthetic and conventional oils. Includes multi-point inspection to keep your engine running smooth.",
  },
  
];

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <HeroSection
        title="Our Services"
        subtitle="Comprehensive tire and automotive services to keep you moving safely."
        showCTA={true}
      />

      {/* Tire Services */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Tire <span className="text-primary">Services</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              From new tire sales to repairs and seasonal swaps, our experienced technicians handle it all with precision and care.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tireServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Lube Services */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Lube & Oil <span className="text-primary">Services</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Keep your engine running smoothly with our quick and affordable oil change and lubrication services.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lubeServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We make getting your vehicle serviced simple and stress-free.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "1", title: "Call or Visit", desc: "Contact us or drop by our location" },
              { step: "2", title: "Consultation", desc: "We assess your needs and provide a quote" },
              { step: "3", title: "Service", desc: "Our experts perform the work efficiently" },
              { step: "4", title: "Drive Away", desc: "Get back on the road with confidence" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
