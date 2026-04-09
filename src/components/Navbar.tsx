import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Results", href: "#results" },
    { label: "Courses", href: "#courses" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-xl font-extrabold gradient-text">
          MathsGenius
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book-demo"
            className="btn-glow-accent text-accent-foreground px-5 py-2.5 rounded-xl text-sm font-semibold"
          >
            Book Free Demo
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary py-2"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book-demo"
            className="btn-glow-accent text-accent-foreground px-5 py-2.5 rounded-xl text-sm font-semibold text-center"
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
