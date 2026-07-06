import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
import SectionBackground from "@/components/SectionBackground";

const videos = [
  {
    id: "0sxHKX1DpNo",
    title: "Mentorship Success Story — Top Rank Achievement",
  },
  {
    id: "aYIKhVS4lNo",
    title: "Competitive Exam Strategy & Problem Solving",
  },
  {
    id: "FkkXpqyjCAM",
    title: "The HUNDRED Global — Math Mastery",
  },
  {
    id: "PVgErBPYb-Q",
    title: "The Feynman Teaching Method in Action",
  },
];

const VideoSection = () => {
  return (
    <section id="videos" className="section-dark py-24 relative">
      <SectionBackground variant="dark" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="si-label mb-3">Watch & Learn</p>
          <h2 className="si-heading text-3xl sm:text-4xl text-foreground">
            Mentor <span className="gradient-text">Spotlight</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Discover the teaching methods that build mathematical thinking,
            problem-solving skills, and exam readiness for students worldwide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="gradient-border-card card-glow overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://youtube.com/@mathsgenius"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-primary text-primary-foreground px-8 py-4 rounded-2xl text-base font-bold inline-flex items-center gap-2"
          >
            <Youtube size={20} /> Subscribe to My Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
