import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/favicon-image.png";

const quickLinks = [
  { name: "Services", path: "/services" },
  { name: "Tire Types", path: "/tires" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "New & Used Tires",
  "Tire Installation & Balancing",
  "Seasonal Tire Change",
  "Oil Change & Lube",
  "Tire Rotation",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Fast Track Tire & Lube" className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for all tire and automotive service needs in Mississauga. Quality service, competitive prices.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Call Us</p>
                  <a href="tel:+16476400097" className="text-sm text-muted-foreground hover:text-primary">
                    (+1) 647-640-0097
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:fasttracktire@yahoo.com" className="text-sm text-muted-foreground hover:text-primary">
                    fasttracktire@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Visit Us</p>
                  <p className="text-sm text-muted-foreground">5138 Everest Dr Unit B<br />Mississauga, ON L4W 2R4</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Hours</p>
                  <p className="text-sm text-muted-foreground">Mon-Sat: 8AM - 6PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Fast Track Tire & Lube. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Proudly serving Mississauga drivers 🇨🇦
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
