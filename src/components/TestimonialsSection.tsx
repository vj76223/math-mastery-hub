import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Class 12 Student",
    text: "I went from 65% to 94% in maths within 6 months. The way concepts are explained made everything click for me.",
    rating: 5,
  },
  {
    name: "Priya Gupta",
    role: "Parent",
    text: "As a parent, I can see the difference in my daughter's confidence. The regular updates and personal attention are outstanding.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    role: "JEE Aspirant",
    text: "The problem-solving strategies I learned here helped me crack JEE Mains with a top score in maths. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Class 10 Student",
    text: "Maths used to scare me, but now it's my strongest subject. Thank you sir for making it so easy to understand!",
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
            Student <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Hear from students and parents who've experienced the difference.
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
              <p className="text-sm text-foreground/80 leading-relaxed">"{t.text}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
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
