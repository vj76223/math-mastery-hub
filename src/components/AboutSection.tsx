import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";
import mentorImg from "@/assets/mentor-success.png";
import SectionBackground from "@/components/SectionBackground";

const highlights = [
  { icon: GraduationCap, text: "B.Tech, NIT Nagpur" },
  { icon: BookOpen, text: "10+ Years of Teaching Excellence" },
  { icon: Award, text: "Feynman Teaching Method" },
  { icon: Users, text: "50M+ Students Reached Across Platforms" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-alt py-24 relative"
    >
      <SectionBackground variant="alt" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="si-label mb-3">About the Mentor</p>
          <h2 className="si-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Meet <span className="gradient-text">Abhinav Sir</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personal mentor of The HUNDRED Global — guiding 100 carefully selected
            students to extraordinary mathematical outcomes
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl gradient-premium opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative gradient-border-card card-glow p-1">
                <img
                  src={mentorImg}
                  alt="Abhinav Sir — Mentor, The HUNDRED Global"
                  width={320}
                  height={400}
                  loading="lazy"
                  className="rounded-3xl w-72 sm:w-80 lg:w-96 object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="gradient-border-card card-glow p-6 glass"
              >
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Hi! I'm{" "}
                  <strong className="text-foreground text-xl">
                    Abhinav Sir
                  </strong>
                  , founder and personal mentor of{" "}
                  <strong className="text-foreground">The HUNDRED Global</strong>.
                  With{" "}
                  <strong className="text-foreground">10+ years</strong> of
                  teaching excellence, I personally guide each of the 100
                  carefully selected students in our exclusive cohort to achieve
                  top ranks in competitive exams while building deep conceptual
                  understanding.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="gradient-border-card card-glow p-6 glass"
              >
                <p className="text-muted-foreground leading-relaxed text-lg">
                  My teaching focuses on the Feynman Technique — deep conceptual
                  clarity over rote learning, personalized learning paths, and
                  building genuine problem-solving intuition. Whether preparing
                  for JEE, SAT, IB, GCSE, or school excellence, I believe in
                  understanding the "why" before the "how" to develop a lasting
                  love for Mathematics.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 1.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="gradient-border-card card-glow p-6 glass group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <highlight.icon
                        className="text-primary group-hover:text-accent transition-colors duration-300"
                        size={20}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-2 text-lg">
                        {highlight.text.split(",")[0]}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.text.includes(",")
                          ? highlight.text.split(",")[1]
                          : ""}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
              className="gradient-premium rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Upskill Your Mathematical Thinking?
              </h3>
              <p className="text-white/90 mb-6 max-w-md mx-auto">
                Join students worldwide building confidence, critical thinking,
                and exam readiness through personalized mentorship.
              </p>
              <a
                href="#book-demo"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold shadow-[0_10px_35px_rgba(201,162,39,0.35)] hover:shadow-[0_10px_40px_rgba(201,162,39,0.5)] transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
