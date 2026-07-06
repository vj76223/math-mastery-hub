import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Brain,
  Users,
  Award,
  BookOpen,
  MessageCircle,
  Video,
  Globe,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Home", icon: Target },
  { id: "vision", label: "Vision", icon: Sparkles },
  { id: "about", label: "About", icon: Users },
  { id: "exams", label: "Exams", icon: Globe },
  { id: "videos", label: "Videos", icon: Video },
  { id: "results", label: "Results", icon: Award },
  { id: "courses", label: "Program", icon: BookOpen },
  { id: "why-me", label: "Philosophy", icon: Brain },
  { id: "testimonials", label: "Stories", icon: MessageCircle },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setIsVisible(window.scrollY > 320);

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: isHovered ? 1 : 0.35, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.25 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        >
          <div
            className={cn(
              "rounded-full transition-all duration-300 border",
              isHovered
                ? "bg-background/80 backdrop-blur-md border-border/60 shadow-sm px-2 py-3"
                : "bg-transparent border-transparent px-1 py-2",
            )}
          >
            <div className="flex flex-col gap-0.5">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    aria-label={section.label}
                    className={cn(
                      "group relative flex items-center rounded-full transition-colors duration-200",
                      isHovered ? "gap-2.5 px-2 py-1.5" : "p-1.5 justify-center",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground/70 hover:text-primary",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-200",
                        isActive ? "h-1 w-1 opacity-100" : "h-0 w-0 opacity-0",
                        !isHovered && "hidden",
                      )}
                    />

                    <section.icon
                      size={isHovered ? 15 : 13}
                      strokeWidth={isActive ? 2.25 : 1.75}
                      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
                    />

                    <span
                      className={cn(
                        "text-xs font-medium whitespace-nowrap overflow-hidden transition-all duration-300",
                        isHovered
                          ? "max-w-[5rem] opacity-100"
                          : "max-w-0 opacity-0",
                      )}
                    >
                      {section.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionNavigation;
