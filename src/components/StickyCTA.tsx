import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';

const StickyCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="sticky-cta"
    >
      <div className="flex flex-col gap-3">
        <a
          href="#book-demo"
          className="btn-glow-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 group"
        >
          <Calendar size={16} />
          <span>Book Free Session</span>
          <span className="text-xs opacity-75 group-hover:opacity-100 transition-opacity">
            Takes 30s
          </span>
        </a>
        <a
          href="#"
          className="btn-glow-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-medium shadow-lg flex items-center justify-center gap-2"
        >
          <MessageCircle size={14} />
          <span>Chat</span>
        </a>
      </div>
    </motion.div>
  );
};

export default StickyCTA;
