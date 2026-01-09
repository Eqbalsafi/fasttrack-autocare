import { Phone, MessageCircle, MapPin, Clock, Mail, User } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import { useExternalLink } from "@/hooks/use-external-link";

const teamContacts = [
  {
    name: "Parvinder Singh",
    role: "Technician",
    phone: "+1905-923-6912",
    phoneRaw: "19059236912",
  },
  {
    name: "Sukhveer Singh",
    role: "Technician",
    phone: "+1437-987-8602",
    phoneRaw: "14379878602",
  },
  {
    name: "Sukh",
    role: "Mechanic",
    phone: "+1647-809-0007",
    phoneRaw: "16478090007",
  },
];

export default function Contact() {
  const { openPhone, openWhatsApp, openEmail } = useExternalLink();

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
            {/* Phone */}
            <Card className="border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 bg-primary">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary-foreground">
                  Customer Service
                </h3>
                <p className="mb-4 text-sm text-primary-foreground/80">
                  Main line for inquiries
                </p>
                <CallButton variant="secondary" size="lg" className="w-full">
                  +1647-640-0097
                </CallButton>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 bg-card">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600/10">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  WhatsApp
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Message us anytime
                </p>
                <WhatsAppButton size="lg" className="w-full">
                  Chat Now
                </WhatsAppButton>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 bg-card">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  Email
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  For general inquiries
                </p>
                <button
                  onClick={() => openEmail("fasttracktire@yahoo.com")}
                  className="inline-block w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  fasttracktire@yahoo.com
                </button>
              </CardContent>
            </Card>
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
                <button
                  onClick={() => openPhone(member.phoneRaw)}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" />
                  {member.phone}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location - remains the same */}
      {/* FAQ - remains the same */}

      <Footer />
    </div>
  );
}
