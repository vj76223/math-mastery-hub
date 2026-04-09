import { Phone, Mail, MapPin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="text-lg font-extrabold gradient-text mb-3">Rahul Maths</div>
            <p className="text-sm text-muted-foreground">
              Expert maths coaching for Class 10–12 & JEE. Helping students achieve their best since 2016.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Results", href: "#results" },
                { label: "Courses", href: "#courses" },
                { label: "Videos", href: "#videos" },
                { label: "Testimonials", href: "#testimonials" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Phone size={14} /> +91 99999 99999</span>
              <span className="flex items-center gap-2"><Mail size={14} /> rahul@mathsmentor.in</span>
              <span className="flex items-center gap-2"><MapPin size={14} /> New Delhi, India</span>
              <a
                href="https://youtube.com/@mathsgenius"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Youtube size={14} /> YouTube Channel
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rahul Maths. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
