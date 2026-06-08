import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import SectionBackground from "@/components/SectionBackground";

const CTASection = () => {
  return (
    <section id="book-demo" className="section-dark py-24 relative overflow-hidden">
      <SectionBackground variant="dark" intensity="strong" />
      <div className="absolute inset-0 gradient-hero opacity-90" />

      <div className="container mx-auto px-4 md:px-10 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="si-label mb-4 text-primary-foreground/90"
        >
          Get Started Today
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="si-heading text-3xl sm:text-4xl lg:text-5xl text-primary-foreground"
        >
          Start Your Journey
          <br />
          to Mathematical Excellence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-primary-foreground/80 max-w-md mx-auto leading-relaxed"
        >
          Book your free session and discover how the Feynman Method builds
          strong mathematical thinking for students worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/919999999999?text=Hi%20Abhinav%2C%20I%20want%20to%20book%20a%20free%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 shadow-[0_10px_35px_rgba(0,0,0,0.25)]"
          >
            Book Free Session →
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 text-primary-foreground border border-white/25 px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-xl"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
