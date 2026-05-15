import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Brain,
  Users,
  Award,
  BookOpen,
  MessageCircle,
  Video,
} from "lucide-react";

const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "hero", label: "Home", icon: Target },
    { id: "about", label: "About", icon: Users },
    { id: "videos", label: "Videos", icon: Video },
    { id: "results", label: "Results", icon: Award },
    { id: "courses", label: "Program", icon: BookOpen },
    { id: "why-me", label: "Philosophy", icon: Brain },
    { id: "testimonials", label: "Stories", icon: MessageCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="glass rounded-2xl p-3 shadow-[0_10px_35px_rgba(255,115,0,0.12)] border border-primary/10">
        <div className="flex flex-col gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative p-3 rounded-xl transition-all duration-300 ${
                activeSection === section.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
              title={section.label}
            >
              <section.icon
                size={18}
                className={`transition-transform duration-300 ${
                  activeSection === section.id
                    ? "scale-110"
                    : "group-hover:scale-110"
                }`}
              />

              {/* Tooltip */}
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-foreground text-background px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                  {section.label}
                </div>
              </div>

              {/* Active indicator */}
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 rounded-xl bg-primary/15 border border-primary/25"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionNavigation;
