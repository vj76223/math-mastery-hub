import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";
import teacherImg from "@/assets/teacher-portrait.jpg";

const highlights = [
  { icon: GraduationCap, text: "M.Sc Mathematics — Delhi University" },
  { icon: BookOpen, text: "8+ years of teaching experience" },
  { icon: Award, text: "Produced 50+ top rankers in JEE & Boards" },
  { icon: Users, text: "Coached 500+ students across India" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="blob w-72 h-72 bg-primary/10 top-10 -left-20 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <img
              src={teacherImg}
              alt="Rahul — Maths Educator"
              width={320}
              height={400}
              loading="lazy"
              className="rounded-3xl w-64 sm:w-72 object-cover"
              style={{ boxShadow: "var(--shadow-elevated)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hi! I'm <strong className="text-foreground">Rahul</strong>, a passionate maths educator
              dedicated to making mathematics intuitive and enjoyable. Over the past 8 years, I've
              helped hundreds of students transform their relationship with maths — from fear to
              confidence, from average marks to top scores.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My teaching philosophy is simple: <em>understand the "why" before the "how"</em>.
              I believe every student can excel in maths with the right guidance, patience, and
              problem-solving strategies. Whether you're preparing for boards or cracking JEE,
              I'm here to help you succeed.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 glass rounded-xl px-4 py-3"
                >
                  <h.icon className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm font-medium text-foreground">{h.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
