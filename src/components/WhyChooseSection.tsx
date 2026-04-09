import { motion } from "framer-motion";
import { Brain, Clock, UserCheck, Award, Lightbulb, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Brain, title: "Concept Clarity", desc: "Deep understanding over rote learning — every topic explained from first principles." },
  { icon: Clock, title: "Flexible Timing", desc: "Batch and one-on-one sessions scheduled around your convenience." },
  { icon: UserCheck, title: "Personal Attention", desc: "Small batches ensure every student gets individual guidance and doubt resolution." },
  { icon: Award, title: "Proven Track Record", desc: "Consistently producing 90%+ scorers and top JEE rankers year after year." },
  { icon: Lightbulb, title: "Problem-Solving Focus", desc: "Practice with curated problems and learn powerful solving strategies." },
  { icon: HeartHandshake, title: "Parent-Teacher Connect", desc: "Regular progress updates and open communication with parents." },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            What sets our coaching apart from the rest.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 card-glow"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <r.icon className="text-primary group-hover:text-accent transition-colors" size={20} />
              </div>
              <h3 className="font-bold text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
