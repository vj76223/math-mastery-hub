import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="book-demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="blob w-96 h-96 bg-white/10 -top-20 -left-20" />
      <div className="blob w-80 h-80 bg-white/5 bottom-0 right-0" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground"
        >
          Ready to Excel
          <br />
          in Maths?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-primary-foreground/70 max-w-md mx-auto"
        >
          Book a free demo class with me and experience the difference. One
          class is all it takes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/919999999999?text=Hi%20Abhinav%2C%20I%20want%20to%20book%20a%20free%20demo%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-2xl text-base font-bold transition-all hover:scale-105"
            style={{ boxShadow: "0 0 32px hsl(170 60% 42% / 0.5)" }}
          >
            Book Free Demo →
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-2xl text-base font-bold hover:bg-primary-foreground/20 transition-all"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
