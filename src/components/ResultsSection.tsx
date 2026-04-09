import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Trophy, Users, Star, TrendingUp } from "lucide-react";

const results = [
  { icon: Trophy, value: 95, suffix: "%+", label: "Average Score", color: "text-primary" },
  { icon: Users, value: 500, suffix: "+", label: "Students Coached", color: "text-accent" },
  { icon: Star, value: 50, suffix: "+", label: "Top Rankers", color: "text-primary" },
  { icon: TrendingUp, value: 8, suffix: "+", label: "Years Experience", color: "text-accent" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-4xl font-extrabold gradient-text">
      {count}{suffix}
    </div>
  );
};

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 relative">
      <div className="blob w-80 h-80 bg-primary/10 -top-10 left-1/2 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            My <span className="gradient-text">Results</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Numbers that speak for themselves — consistent excellence year after year.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gradient-border-card card-glow p-8 text-center"
            >
              <r.icon className={`mx-auto mb-4 ${r.color}`} size={28} />
              <Counter target={r.value} suffix={r.suffix} />
              <div className="text-sm text-muted-foreground mt-2">{r.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
