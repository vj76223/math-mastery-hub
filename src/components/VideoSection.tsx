import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Calculus Made Easy — Limits & Derivatives",
  },
  {
    id: "rfscVS0vtbw",
    title: "Trigonometry Full Chapter — Class 10",
  },
  {
    id: "pTnEG_WGd2Q",
    title: "JEE Mains — Top 20 Problems Solved",
  },
  {
    id: "HvMSRWTE2mI",
    title: "Probability Masterclass — Class 12",
  },
  {
    id: "1PfQLdHc3_8",
    title: "Quadratic Equations — Tricks & Shortcuts",
  },
  {
    id: "s86-Z-CbaHA",
    title: "Coordinate Geometry — Board Exam Prep",
  },
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            My <span className="gradient-text">YouTube Lessons</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Free maths lessons watched by thousands of students. Subscribe and learn at your own pace.
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
