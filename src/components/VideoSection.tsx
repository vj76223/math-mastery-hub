import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            See a <span className="gradient-text">Demo Class</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Experience the teaching style before you enroll.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="gradient-border-card overflow-hidden rounded-2xl" style={{ boxShadow: "var(--shadow-elevated)" }}>
            {!playing ? (
              <div
                className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center cursor-pointer group"
                onClick={() => setPlaying(true)}
              >
                <div className="absolute inset-0 bg-foreground/5" />
                <div className="relative z-10 w-20 h-20 rounded-full btn-glow-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="text-accent-foreground ml-1" size={32} />
                </div>
                <span className="absolute bottom-6 text-sm font-medium text-muted-foreground">
                  Click to watch a sample class
                </span>
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Demo Class"
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
