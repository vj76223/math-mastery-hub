import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";
import teacherImg from "@/assets/teacher-portrait.jpg";

const highlights = [
  { icon: GraduationCap, text: "B.Tech, NIT Nagpur" },
  { icon: BookOpen, text: "10+ Years of Teaching Excellence" },
  { icon: Award, text: "Mentored AIR 1, AIR 40, AIR 79 (JEE Advanced)" },
  { icon: Users, text: "50M+ Students Reached Across Platforms" },
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
            Meet <span className="gradient-text">Abhinav Jha</span>
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
              alt="Abhinav — Maths Educator"
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
              Hi! I'm <strong className="text-foreground">Abhinav Jha</strong>,
              a rank producer in JEE Mathematics. With 10+ years of teaching
              excellence, I've guided students to achieve{" "}
              <strong className="text-foreground">AIR 1, AIR 40, AIR 79</strong>{" "}
              in JEE Advanced. My approach has impacted{" "}
              <strong className="text-foreground">50M+</strong> learners across
              digital platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Abhinav Jha is not just a teacher — he is a rank producer. My
              teaching focuses on deep conceptual clarity, exam strategy, and
              building problem-solving intuition. I believe in understanding the
              "why" before the "how", ensuring long-term retention and
              confidence for cracking JEE.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 glass rounded-xl px-4 py-3"
                >
                  <h.icon className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm font-medium text-foreground">
                    {h.text}
                  </span>
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
