import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "AIR 1 Student",
    role: "JEE Advanced 2022",
    text: "Completed entire JEE Maths syllabus by class 10. His mentorship led to AIR 1.",
    rating: 5,
    achievement: "All India Rank 1",
  },
  {
    name: "99%ile Student",
    role: "JEE Advanced",
    text: "Abhinav Sir didn't just teach Maths, he taught me how to think, plan, and attempt JEE with precision.",
    rating: 5,
    achievement: "99 Percentile",
  },
  {
    name: "AIR 40 Student",
    role: "JEE Advanced",
    text: "The Feynman-based teaching approach gave me the conceptual clarity needed to crack JEE Advanced.",
    rating: 5,
    achievement: "All India Rank 40",
  },
  {
    name: "AIR 79 Student",
    role: "JEE Advanced 2022",
    text: "From average marks to AIR 79 - his mentorship transformed my problem-solving abilities completely.",
    rating: 5,
    achievement: "All India Rank 79",
  },
  {
    name: "Top Performer",
    role: "JEE Mains",
    text: "The problem-solving strategies I learned were game-changing. Scored 99.2 percentile in JEE Mains.",
    rating: 5,
    achievement: "99.2 Percentile",
  },
  {
    name: "Board Topper",
    role: "Class 12 Boards",
    text: "Maths was my weakest subject. After Abhinav Sir's guidance, I scored 98% in boards!",
    rating: 5,
    achievement: "98% in Boards",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="testimonials"
      className="py-24 relative section-transition bg-secondary/30"
    >
      <div className="blob w-80 h-80 bg-accent/10 top-10 right-10 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from AIR rankers and top performers who've experienced the rank
            producer's mentorship
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Carousel Container */}
            <div className="rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="gradient-border-card card-glow p-8 lg:p-12 glass min-h-[300px]"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Quote className="text-accent" size={32} />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({
                        length: testimonials[currentIndex].rating,
                      }).map((_, j) => (
                        <Star
                          key={j}
                          size={20}
                          className="fill-accent text-accent animate-pulse"
                        />
                      ))}
                    </div>

                    <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-6 font-medium">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Achievement Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
                      <span className="font-bold gradient-text">
                        {testimonials[currentIndex].achievement}
                      </span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold gradient-text">
                        {testimonials[currentIndex].name.split(" ")[0]}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-foreground text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-primary to-accent scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {isAutoPlaying ? "Pause" : "Play"} Auto-slide
            </button>
          </div>
        </div>

        {/* Grid Preview (Mobile) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => goToSlide(index)}
              className="gradient-border-card card-glow p-6 glass cursor-pointer group"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-accent text-accent group-hover:animate-pulse"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-3 line-clamp-3">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
                <div className="text-xs font-bold gradient-text">
                  {testimonial.achievement}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
