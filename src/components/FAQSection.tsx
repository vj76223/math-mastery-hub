import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionBackground from "@/components/SectionBackground";

const faqs = [
  {
    question: "Why is the cohort limited to only 100 students?",
    answer:
      "By intentionally limiting enrollment to 100 carefully selected students each year, every learner receives personalized guidance, individual attention, and becomes part of a close-knit global community under Abhinav Sir's direct mentorship.",
  },
  {
    question: "What makes The HUNDRED Global unique?",
    answer:
      "We combine the Feynman Technique with exclusive 1:1 mentorship, a global alumni network, and an intentionally small cohort — creating extraordinary outcomes through extraordinary mentorship.",
  },
  {
    question: "Does my child get personalized support?",
    answer:
      "Yes, every student receives 1:1 doubt support, feedback, and progress monitoring.",
  },
  {
    question: "Will this improve problem-solving skills?",
    answer:
      "Yes, we focus on building logic, reasoning, and critical thinking skills.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Improved confidence, stronger grades, and better performance in school and competitive exams.",
  },
  {
    question: "How do you help students enjoy Math?",
    answer:
      "By making concepts engaging, practical, and easy to understand, we develop a genuine love for Mathematics.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-alt py-24 relative">
      <SectionBackground variant="alt" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="si-label mb-3">FAQ</p>
          <h2 className="si-heading text-3xl sm:text-4xl text-foreground">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Everything you need to know about The HUNDRED Global
            program.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto gradient-border-card card-glow p-6 sm:p-8 glass"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
