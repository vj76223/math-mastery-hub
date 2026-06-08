import { motion } from "framer-motion";
import { Brain, Lightbulb, Target, BookOpen, Zap, Award } from "lucide-react";
import SectionBackground from "@/components/SectionBackground";

const philosophyPoints = [
  {
    icon: Brain,
    title: "Explain Simply",
    desc: "Break down complex concepts into simple, understandable terms using the Feynman Technique.",
  },
  {
    icon: Lightbulb,
    title: "Identify Gaps",
    desc: "Pinpoint exactly where understanding breaks down and fill those knowledge gaps systematically.",
  },
  {
    icon: Target,
    title: "Build Deep Clarity",
    desc: "Focus on fundamental principles rather than memorization for lasting comprehension.",
  },
  {
    icon: BookOpen,
    title: "Apply Concepts",
    desc: "Use newly understood concepts in novel situations to build true problem-solving intuition.",
  },
  {
    icon: Zap,
    title: "Build Speed",
    desc: "Once concepts are clear, develop the speed and accuracy needed for exams worldwide.",
  },
  {
    icon: Award,
    title: "Exam Readiness",
    desc: "Combine conceptual clarity with strategic thinking for school and competitive assessments globally.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-me" className="section-alt py-24 relative">
      <SectionBackground variant="alt" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="si-label mb-3">Approach</p>
          <h2 className="si-heading text-3xl sm:text-4xl text-foreground">
            Teaching <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Based on the Feynman Technique — I believe Maths is not about
            solving problems, it's about understanding why they work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {philosophyPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 card-glow"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <p.icon
                  className="text-primary group-hover:text-accent transition-colors"
                  size={20}
                />
              </div>
              <h3 className="font-bold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
