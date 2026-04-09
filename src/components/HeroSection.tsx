import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const stats = [
  { value: "500+", label: "Students Coached" },
  { value: "95%+", label: "Avg Score" },
  { value: "8+", label: "Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-[0.06]" />
      <div className="blob w-96 h-96 bg-primary/20 -top-20 -right-20 animate-pulse-glow" />
      <div className="blob w-72 h-72 bg-accent/20 bottom-10 -left-10 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="blob w-56 h-56 bg-purple-400/15 top-1/3 right-1/4 animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-primary mb-6"
          >
            🎓 Trusted by 500+ Students & Parents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground"
          >
            Score{" "}
            <span className="gradient-text">95%+</span> in Maths{" "}
            <br className="hidden sm:block" />
            with Expert Coaching
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Personalized maths coaching for Class 10, 11, 12 & JEE. 
            Concept-first approach with proven results and individual attention.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#book-demo"
              className="btn-glow-accent text-accent-foreground px-8 py-4 rounded-2xl text-base font-bold"
            >
              Book Free Demo Class →
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-primary text-primary-foreground px-8 py-4 rounded-2xl text-base font-bold inline-flex items-center gap-2"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass rounded-2xl px-8 py-5 text-center animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="text-2xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
