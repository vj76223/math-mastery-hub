import { motion } from "framer-motion";
import { MessageCircle, Globe, Crown } from "lucide-react";
import heroImg from "@/assets/hero-portrait.png";
import SectionBackground from "@/components/SectionBackground";

const stats = [
  { value: "100", label: "Exclusive Cohort" },
  { value: "7+", label: "Countries Worldwide" },
  { value: "10+", label: "Years of Excellence" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="section-dark relative min-h-screen flex items-center pt-20"
    >
      <SectionBackground variant="dark" intensity="strong" />

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-semibold text-primary mb-8"
            >
              <Crown size={18} />
              <span>Premium Maths Coaching</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="si-label mb-4"
            >
              The HUNDRED Global · Exclusive Mathematics Program
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="si-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-4"
            >
              <span className="block">100 Students.</span>
              <span className="block gradient-text">One Global Community.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="text-xl sm:text-2xl lg:text-3xl font-light text-muted-foreground leading-[1.15] mb-6"
            >
              A{" "}
              <span className="gradient-text font-semibold">
                lifetime of opportunities
              </span>{" "}
              under the personal mentorship of Abhinav Sir.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8"
            >
              Extraordinary outcomes through extraordinary mentorship. Every year,
              only 100 carefully selected students from India, the United States,
              Canada, the Gulf, Australia, Singapore, and beyond join this
              exclusive mathematics program.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8"
            >
              <a
                href="#book-demo"
                className="btn-glow-accent text-primary-foreground px-10 py-4 rounded-2xl text-base font-bold"
              >
                Apply for Selection
              </a>
              <a
                href="#vision"
                className="btn-glow-primary px-8 py-4 rounded-2xl text-base font-semibold inline-flex items-center gap-3"
              >
                <Globe size={20} />
                Our Vision
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground"
            >
              <a
                href="#vision"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-300"
              >
                <MessageCircle size={18} />
                <span>Lifetime Alumni Network</span>
              </a>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Limited seats available</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-6 rounded-[34px] gradient-premium opacity-25 blur-3xl group-hover:opacity-35 transition-opacity duration-500" />
              <div className="relative gradient-border-card p-1 rounded-[34px] drop-shadow-[0_20px_60px_rgba(201,162,39,0.25)]">
                <img
                  src={heroImg}
                  alt="Abhinav Sir — Mentor, The HUNDRED Global"
                  width={400}
                  height={500}
                  className="rounded-[30px] w-72 sm:w-80 lg:w-96 object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 text-center"
              >
                <div className="text-xl font-black gradient-text">Feynman</div>
                <div className="text-xs text-muted-foreground font-medium">
                  Method
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -top-6 -right-6 glass rounded-2xl px-5 py-4 text-center"
              >
                <div className="text-xl font-black gradient-text">10+ yrs</div>
                <div className="text-xs text-muted-foreground font-medium">
                  Experience
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 + index * 0.12 }}
              className="gradient-border-card card-glow p-6 text-center glass"
            >
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
