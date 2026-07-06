import { Phone, Mail, MapPin, Youtube } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-primary/10 bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.06),transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <BrandLogo size="md" className="mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              The world's most trusted global mathematics community. 100 students,
              one global community, a lifetime of opportunities under Abhinav Sir.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Vision", href: "#vision" },
                { label: "About", href: "#about" },
                { label: "Exams", href: "#exams" },
                { label: "Results", href: "#results" },
                { label: "Courses", href: "#courses" },
                { label: "FAQ", href: "#faq" },
                { label: "Videos", href: "#videos" },
                { label: "Testimonials", href: "#testimonials" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-primary" /> +91 99999 99999
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="text-primary" /> Abhinav@mathsmentor.in
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> New Delhi, India
              </span>
              <a
                href="https://youtube.com/@mathsgenius"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
              >
                <Youtube size={14} className="text-primary" /> YouTube Channel
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary/10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} The HUNDRED Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
