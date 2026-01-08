import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Locations() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <HeroSection
        title="Our Location"
        subtitle="Visit Fast Track Tire & Lube in Mississauga for all your tire and automotive needs."
        showCTA={false}
      />

      {/* Location Details */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Info Card */}
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Fast Track <span className="text-primary">Tire & Lube</span>
                </h2>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        5138 Everest Dr Unit B<br />
                        Mississauga, ON L4W 2R4
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href="tel:+16476400097"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        (+1) 647-640-0097
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:fasttracktire@yahoo.com"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        fasttracktire@yahoo.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-muted-foreground">
                        Mon-Sat: 8AM - 6PM<br />
                        Sun: Closed
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:6406400097"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Phone className="h-5 w-5" />
                    Call Us
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=5138+Everest+Dr+Unit+B+Mississauga+ON+L4W+2R4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/50 px-6 py-3 font-medium text-foreground transition-colors hover:bg-primary/10"
                  >
                    <MapPin className="h-5 w-5" />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="h-[400px] overflow-hidden rounded-xl border border-border lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.5!2d-79.6182!3d43.6292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f0e0e0e0e0e%3A0x0!2s5138%20Everest%20Dr%2C%20Mississauga%2C%20ON%20L4W%202R4!5e0!3m2!1sen!2sca!4v1704067200000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fast Track Tire & Lube Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Ready to Visit Us?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
            No appointment needed for most services. Just drop by or give us a call!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:6406400097"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-5 w-5" />
              (+1) 647-640-0097
            </a>
            <a
              href="https://wa.me/+16476400097"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-6 py-3 font-medium text-foreground transition-colors hover:bg-primary/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
