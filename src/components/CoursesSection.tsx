import { motion } from "framer-motion";
import { Users, Calendar, BarChart3, MessageCircle } from "lucide-react";

const offerings = [
  {
    icon: Users,
    title: "1:1 Mentorship",
    subtitle: "Personal Attention",
    desc: "Direct mentorship with Abhinav Jha for personalized learning and doubt solving.",
    cta: "Book Session",
  },
  {
    icon: Calendar,
    title: "100+ Live Classes",
    subtitle: "Interactive Learning",
    desc: "Live interactive sessions covering complete syllabus with real-time problem solving.",
    cta: "View Schedule",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    subtitle: "Data-Driven Progress",
    desc: "Regular assessments with detailed performance analytics and improvement plans.",
    cta: "Learn More",
  },
  {
    icon: MessageCircle,
    title: "24/7 Doubt Support",
    subtitle: "Always Available",
    desc: "Get your doubts resolved within 24 hours through dedicated support channels.",
    cta: "Get Support",
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
            What You <span className="gradient-text">Get</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Complete learning ecosystem designed for JEE success with personal
            mentorship.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group gradient-border-card card-glow p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <o.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{o.title}</h3>
              <span className="text-xs font-medium text-accent mt-1">
                {o.subtitle}
              </span>
              <p className="text-sm text-muted-foreground mt-3 flex-1">
                {o.desc}
              </p>
              <a
                href="#book-demo"
                className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                {o.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
