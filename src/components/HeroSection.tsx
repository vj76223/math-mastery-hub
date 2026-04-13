import { motion } from "framer-motion";
import { MessageCircle, Youtube, GraduationCap } from "lucide-react";
import teacherImg from "@/assets/teacher-portrait.jpg";

const stats = [
  { value: "50M+", label: "Learners Impacted" },
  { value: "AIR 1", label: "Mentored Rank" },
  { value: "10+", label: "Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-[0.06]" />
      <div className="blob w-96 h-96 bg-primary/20 -top-20 -right-20 animate-pulse-glow" />
      <div
        className="blob w-72 h-72 bg-accent/20 bottom-10 -left-10 animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="blob w-56 h-56 bg-purple-400/15 top-1/3 right-1/4 animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-primary mb-6"
            >
              <GraduationCap size={16} /> Learn Maths from a Rank Producer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground"
            >
              Abhinav Jha — IIT Mentor
              <br className="hidden sm:block" />
              <span className="gradient-text">
                Guided AIR 1, AIR 40, AIR 79
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              Master concepts. Build speed. Crack JEE with confidence. 10+ years
              of teaching excellence. 50M+ learners impacted.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="#book-demo"
                className="btn-glow-accent text-accent-foreground px-8 py-4 rounded-2xl text-base font-bold"
              >
                Book a Free Session →
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

            <motion.a
              href="https://youtube.com/@mathsgenius"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube size={16} /> Subscribe on YouTube — 50M+ learners reached
            </motion.a>
          </div>

          {/* Teacher Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl gradient-hero opacity-20 blur-2xl" />
              <img
                src={teacherImg}
                alt="Abhinav — Maths Educator"
                width={400}
                height={500}
                className="relative rounded-3xl shadow-2xl w-72 sm:w-80 lg:w-96 object-cover"
                style={{ boxShadow: "var(--shadow-elevated)" }}
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 text-center"
              >
                <div className="text-lg font-extrabold gradient-text">
                  AIR 1
                </div>
                <div className="text-xs text-muted-foreground">Mentored</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-center"
              >
                <div className="text-lg font-extrabold gradient-text">
                  10+ yrs
                </div>
                <div className="text-xs text-muted-foreground">Experience</div>
              </motion.div>
            </div>
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
              <div className="text-2xl font-extrabold gradient-text">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
