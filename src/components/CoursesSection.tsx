import { motion } from "framer-motion";
import { BookOpen, Atom, Calculator, Target } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "Class 10",
    board: "CBSE / ICSE",
    desc: "Build strong foundations with conceptual clarity and board exam preparation.",
    cta: "Start Learning",
  },
  {
    icon: Calculator,
    title: "Class 11",
    board: "CBSE / State",
    desc: "Master advanced topics — calculus, trigonometry, and more with step-by-step guidance.",
    cta: "Start Learning",
  },
  {
    icon: Atom,
    title: "Class 12",
    board: "CBSE / ISC",
    desc: "Score top marks with focused board prep, previous year analysis, and mock tests.",
    cta: "Start Learning",
  },
  {
    icon: Target,
    title: "JEE Maths",
    board: "Mains & Advanced",
    desc: "Crack JEE with problem-solving strategies, advanced concepts, and timed practice.",
    cta: "Start Learning",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 relative">
      <div className="blob w-64 h-64 bg-accent/10 bottom-0 right-0 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Courses <span className="gradient-text">Offered</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Tailored programs for every stage of your maths journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group gradient-border-card card-glow p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <c.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
              <span className="text-xs font-medium text-accent mt-1">{c.board}</span>
              <p className="text-sm text-muted-foreground mt-3 flex-1">{c.desc}</p>
              <a
                href="#book-demo"
                className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                {c.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
