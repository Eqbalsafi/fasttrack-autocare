import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/favicon-image.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Tires", path: "/tires" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container custom-container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Fast Track Tire & Lube" 
              className="h-12 w-auto sm:h-12 md:h-20 lg:h-23" 
            />
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:nav-link-hover ${
                  location.pathname === link.path
                    ? "nav-link-active text-white"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 md:flex">
            <a href="tel:+16476400097" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">(+1) 647-640-0097</span>
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="tel:+16476400097">Call Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-foreground hover:nav-link-hover lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-md px-4 py-3 text-sm font-medium transition-colors hover:nav-link-hover ${
                    location.pathname === link.path
                      ? "nav-link-active text-white"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href="tel:+16476400097">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
