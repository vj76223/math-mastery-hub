import { motion } from "framer-motion";
import { MessageCircle, Youtube, GraduationCap } from "lucide-react";
import teacherImg from "@/assets/teacher-portrait.jpg";

const stats = [
  { value: "12M+", label: "Learners Impacted" },
  { value: "AIR 1", label: "Mentored Rank" },
  { value: "10+", label: "Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 section-transition">
      {/* Enhanced Background */}
      <div className="absolute inset-0 gradient-hero opacity-[0.08]" />
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
          {/* Enhanced Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-semibold text-primary mb-8 card-glow"
            >
              <GraduationCap size={18} className="animate-pulse" />
              <span>Learn Maths from a Rank Producer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-foreground mb-6"
            >
              <span className="block">Abhinav Jha</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-muted-foreground mb-2">
                IIT Mentor
              </span>
              <span className="gradient-text block">
                Guided AIR 1, AIR 40, AIR 79
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
            >
              Master concepts. Build speed. Crack JEE with confidence.
              <br className="hidden sm:block" />
              <span className="font-semibold text-foreground">
                10+ years
              </span>{" "}
              of teaching excellence.
              <span className="font-semibold text-foreground"> 12M+</span>{" "}
              learners impacted.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8"
            >
              <a
                href="#book-demo"
                className="btn-glow-accent text-accent-foreground px-10 py-5 rounded-2xl text-base font-bold shadow-xl group"
              >
                <span className="flex items-center gap-3">
                  Book a Free Session
                  <span className="text-xs opacity-75 group-hover:opacity-100 transition-opacity">
                    Takes 30s
                  </span>
                </span>
              </a>
              <a
                href="#"
                className="btn-glow-primary text-primary-foreground px-8 py-5 rounded-2xl text-base font-bold inline-flex items-center gap-3 shadow-xl"
              >
                <MessageCircle size={20} />
                Chat Support
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 hover:text-primary transition-all duration-300 group"
              >
                <Youtube
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                <span>12M+ learners reached</span>
              </a>
              <div className="hidden sm:block w-1 h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Available for mentorship</span>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Teacher Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-6 rounded-3xl gradient-premium opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative gradient-border-card card-glow p-1">
                <img
                  src={teacherImg}
                  alt="Abhinav - Maths Educator"
                  width={400}
                  height={500}
                  className="rounded-3xl w-72 sm:w-80 lg:w-96 object-cover"
                />
              </div>

              {/* Enhanced Floating Badges */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 text-center card-glow shadow-xl"
              >
                <div className="text-xl font-extrabold gradient-text">
                  AIR 1
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  Mentored
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
                className="absolute -top-6 -right-6 glass rounded-2xl px-5 py-4 text-center card-glow shadow-xl"
              >
                <div className="text-xl font-extrabold gradient-text">
                  10+ yrs
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  Experience
                </div>
              </motion.div>

              {/* Additional floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute top-1/2 -left-8 glass rounded-2xl px-4 py-3 text-center card-glow shadow-xl"
              >
                <div className="text-lg font-extrabold gradient-text">50M+</div>
                <div className="text-xs text-muted-foreground font-medium">
                  Students
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1 + index * 0.2,
                ease: "easeOut",
              }}
              className="gradient-border-card card-glow p-6 text-center glass"
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">
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
