import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Exams", href: "#exams" },
    { label: "Programs", href: "#courses" },
    { label: "FAQ", href: "#faq" },
    { label: "Results", href: "#results" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-primary/10 py-3 shadow-[0_10px_35px_rgba(255,115,0,0.08)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10">
        <a href="#" className="text-lg md:text-xl font-black tracking-tight gradient-text">
          Abhinav Maths
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#book-demo"
            className="btn-glow-accent text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            Book Free Demo
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-3 border border-primary/10">
          <div className="flex items-center justify-between pb-2 border-b border-primary/10">
            <span className="text-sm font-medium text-muted-foreground">Appearance</span>
            <ThemeToggle />
          </div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book-demo"
            className="btn-glow-accent text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book Free Demo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
