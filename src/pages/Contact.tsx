import { Phone, MessageCircle, MapPin, Clock, Mail, User } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Phone,
    title: "Customer Service",
    description: "Main line for inquiries",
    action: "+1640-640-0097",
    href: "tel:+16406400097",
    primary: true,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Message us anytime",
    action: "Chat Now",
    href: "https://wa.me/+16406400097",
    primary: false,
  },
  {
    icon: Mail,
    title: "Email",
    description: "For general inquiries",
    action: "fasttracktire@yahoo.com",
    href: "mailto:fasttracktire@yahoo.com",
    primary: false,
  },
];

const teamContacts = [
  {
    name: "Parvinder Singh",
    role: "Technician",
    phone: "+1905-923-6912",
  },
  {
    name: "Sukhveer Singh",
    role: "Technician",
    phone: "+1437-987-8602",
  },
  {
    name: "Sukh",
    role: "Mechanic",
    phone: "+1647-809-0007",
  },
];

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <HeroSection
        title="Contact Us"
        subtitle="We're here to help. Reach out via phone or WhatsApp for the fastest response."
        showCTA={false}
      />

      {/* Contact Methods */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                className={`border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
                  method.primary ? "bg-primary" : "bg-card"
                }`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                      method.primary ? "bg-primary-foreground/20" : "bg-primary/10"
                    }`}
                  >
                    <method.icon
                      className={`h-8 w-8 ${method.primary ? "text-primary-foreground" : "text-primary"}`}
                    />
                  </div>
                  <h3
                    className={`mb-2 text-xl font-bold ${
                      method.primary ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {method.title}
                  </h3>
                  <p
                    className={`mb-4 text-sm ${
                      method.primary ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`inline-block rounded-lg px-6 py-3 font-medium transition-colors ${
                      method.primary
                        ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {method.action}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Reach out directly to our experienced team members.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {teamContacts.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-border bg-background p-6 text-center transition-colors hover:border-primary/50"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-foreground">{member.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{member.role}</p>
                <a
                  href={`tel:${member.phone.replace(/-/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" />
                  {member.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Our <span className="text-primary">Location</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Visit us at our convenient Mississauga location.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      5138 Everest Dr Unit B<br />
                      Mississauga, ON L4W 2R4
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat: 8AM - 6PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.5!2d-79.6182!3d43.6292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f0e0e0e0e0e%3A0x0!2s5138%20Everest%20Dr%2C%20Mississauga%2C%20ON%20L4W%202R4!5e0!3m2!1sen!2sca!4v1704067200000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
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

      {/* FAQ Preview */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="mt-8 space-y-4 text-left">
              {[
                {
                  q: "Do I need an appointment?",
                  a: "No appointment needed for most services! Just drop by. For tire installations during peak season, we recommend calling ahead.",
                },
                {
                  q: "How long does an oil change take?",
                  a: "Most oil changes take 15-30 minutes. We'll have you back on the road in no time.",
                },
                {
                  q: "Do you sell used tires?",
                  a: "Yes! We offer quality used tires at affordable prices. Ask us about availability for your tire size.",
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-lg border border-border bg-background p-6">
                  <h3 className="mb-2 font-bold text-foreground">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
