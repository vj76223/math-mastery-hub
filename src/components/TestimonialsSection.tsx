import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "AIR 1 Student",
    role: "JEE Advanced 2022",
    text: "Completed entire JEE Maths syllabus by class 10. His mentorship led to AIR 1.",
    rating: 5,
  },
  {
    name: "99.994%ile Student",
    role: "JEE Advanced",
    text: "Abhinav Sir didn't just teach Maths, he taught me how to think, plan, and attempt the JEE with precision.",
    rating: 5,
  },
  {
    name: "AIR 40 Student",
    role: "JEE Advanced",
    text: "The Feynman-based teaching approach gave me the conceptual clarity needed to crack JEE Advanced.",
    rating: 5,
  },
  {
    name: "AIR 79 Student",
    role: "JEE Advanced 2022",
    text: "From average marks to AIR 79 — his mentorship transformed my problem-solving abilities completely.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="blob w-72 h-72 bg-accent/10 top-10 right-10 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Hear from AIR rankers and top performers who've experienced the rank
            producer's mentorship.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gradient-border-card card-glow p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
