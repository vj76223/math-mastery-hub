import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Trophy, Users, Star, TrendingUp, Award } from "lucide-react";

const results = [
  {
    icon: Award,
    value: 47,
    suffix: "+",
    label: "Ranks Under AIR 500",
    color: "text-primary",
  },
  {
    icon: Trophy,
    value: 1,
    suffix: "",
    label: "AIR 1 Mentored",
    color: "text-accent",
  },
  {
    icon: Users,
    value: 97,
    suffix: "%+",
    label: "Percentile Students",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: 12,
    suffix: "M+",
    label: "Learners Reached",
    color: "text-accent",
  },
];

const Counter = ({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
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
  }, [target, duration]);

  return (
    <div className="text-4xl sm:text-5xl font-extrabold gradient-text">
      {count}
      {suffix}
    </div>
  );
};

const ResultsSection = () => {
  const comparisonData = [
    {
      title: "Traditional Coaching",
      features: [
        { text: "Large batch sizes", available: true },
        { text: "Fixed curriculum", available: true },
        { text: "Personal attention", available: false },
        { text: "AIR 1 mentorship", available: false },
        { text: "Feynman technique", available: false },
        { text: "50M+ students impacted", available: false },
      ],
      highlighted: false,
    },
    {
      title: "Abhinav Jha's Mentorship",
      features: [
        { text: "Small batch sizes", available: true },
        { text: "Personalized curriculum", available: true },
        { text: "1:1 personal attention", available: true },
        { text: "AIR 1 mentorship", available: true },
        { text: "Feynman technique", available: true },
        { text: "50M+ students impacted", available: true },
      ],
      highlighted: true,
    },
  ];

  return (
    <section
      id="results"
      className="py-24 relative section-transition bg-secondary/30"
    >
      <div className="blob w-80 h-80 bg-primary/10 -top-10 left-1/2 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Results That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Not luck. A system that works - 30+ ranks within AIR 500 and
            consistent 99%ile results
          </p>
        </motion.div>

        {/* Enhanced Results Counter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="gradient-border-card card-glow p-8 lg:p-12 glass">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors duration-300">
                    <result.icon
                      className={`${result.color} transition-colors duration-300`}
                      size={32}
                    />
                  </div>
                  <Counter
                    target={result.value}
                    suffix={result.suffix}
                    duration={2500}
                  />
                  <div className="text-sm text-muted-foreground mt-2 font-medium">
                    {result.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Visual Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">Abhinav Jha</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the difference between traditional coaching and rank-producing
              mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {comparisonData.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut",
                }}
                className={`relative ${
                  comparison.highlighted
                    ? "gradient-premium scale-105 shadow-2xl"
                    : "gradient-border-card card-glow"
                } rounded-2xl p-8 glass`}
              >
                {comparison.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                      RECOMMENDED
                    </div>
                  </div>
                )}

                <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                  {comparison.title}
                </h4>

                <div className="space-y-4">
                  {comparison.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          feature.available ? "bg-green-100" : "bg-red-100"
                        }`}
                      >
                        {feature.available ? (
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                        ) : (
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                        )}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          feature.available
                            ? "text-foreground"
                            : "text-muted-foreground line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {comparison.highlighted && (
                  <div className="mt-6 text-center">
                    <a
                      href="#book-demo"
                      className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Achievement Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              className="gradient-border-card card-glow p-6 glass text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <p className="text-sm text-muted-foreground font-medium">
                JEE Advanced Selection Rate
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              className="gradient-border-card card-glow p-6 glass text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
              <p className="text-sm text-muted-foreground font-medium">
                Student Satisfaction Rating
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              className="gradient-border-card card-glow p-6 glass text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <p className="text-sm text-muted-foreground font-medium">
                Years of Combined Experience
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
