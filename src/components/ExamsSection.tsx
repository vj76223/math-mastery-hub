import { motion } from "framer-motion";
import SectionBackground from "@/components/SectionBackground";

const examCategories = [
  {
    region: "India",
    exams: ["JEE Main & Advanced", "CBSE / ICSE Mathematics", "School Olympiads"],
  },
  {
    region: "United States",
    exams: ["SAT Math", "ACT Math", "AMC Competitions", "AP Calculus"],
  },
  {
    region: "United Kingdom",
    exams: ["GCSE Mathematics", "A-Level Mathematics", "UKMT Challenges"],
  },
  {
    region: "International",
    exams: ["IB Mathematics", "Olympiad Preparation", "Country-Specific Assessments"],
  },
];

const targetCountries = ["India", "USA", "UAE", "Canada", "Australia", "UK"];

const ExamsSection = () => {
  return (
    <section id="exams" className="section-dark py-24 relative">
      <SectionBackground variant="dark" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="si-label mb-3">Global Curriculum</p>
          <h2 className="si-heading text-3xl sm:text-4xl text-foreground">
            Exams We <span className="gradient-text">Support</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            From school excellence to competitive exam readiness — JEE is one
            of many programs we offer. We prepare students for mathematics
            assessments worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {targetCountries.map((country) => (
            <span
              key={country}
              className="glass px-4 py-2 rounded-full text-sm font-medium text-foreground border border-primary/10"
            >
              {country}
            </span>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {examCategories.map((category, i) => (
            <motion.div
              key={category.region}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="gradient-border-card card-glow p-6 glass"
            >
              <h3 className="font-bold text-foreground text-lg mb-4">
                {category.region}
              </h3>
              <ul className="space-y-3">
                {category.exams.map((exam) => (
                  <li
                    key={exam}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {exam}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamsSection;
