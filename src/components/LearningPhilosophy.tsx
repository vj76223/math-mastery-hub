import { motion } from 'framer-motion';
import { Brain, Lightbulb, Target, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const LearningPhilosophy = () => {
  const philosophySteps = [
    {
      icon: Brain,
      title: "Explain Simply",
      description: "Break down complex concepts using the Feynman Technique",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Lightbulb,
      title: "Identify Gaps",
      description: "Pinpoint exactly where understanding breaks down",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Target,
      title: "Build Deep Clarity",
      description: "Focus on fundamental principles over memorization",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: BookOpen,
      title: "Apply Concepts",
      description: "Use knowledge in novel situations for true mastery",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  const journeySteps = [
    {
      title: "Foundation",
      description: "Build strong conceptual understanding",
      duration: "2-3 months",
      status: "completed",
    },
    {
      title: "Application",
      description: "Practice with JEE-level problems",
      duration: "3-4 months",
      status: "active",
    },
    {
      title: "Mastery",
      description: "Achieve speed and accuracy for exams",
      duration: "2-3 months",
      status: "upcoming",
    },
    {
      title: "Excellence",
      description: "Crack JEE with confidence",
      duration: "Final phase",
      status: "upcoming",
    },
  ];

  return (
    <section className="py-24 relative section-transition">
      <div className="blob w-80 h-80 bg-accent/10 top-20 right-10 animate-pulse-glow" />
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
            Learning <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Based on the Feynman Technique - I believe Maths is not about solving problems, 
            it's about understanding why they work.
          </p>
        </motion.div>

        {/* Philosophy Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="gradient-border-card card-glow p-8 lg:p-12 glass">
            <h3 className="text-2xl font-bold text-center mb-12">The Feynman Approach</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {philosophySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.1, 
                    ease: "easeOut" 
                  }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`${step.color} transition-colors duration-300`} size={32} />
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  
                  {/* Arrow connection */}
                  {index < philosophySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full">
                      <ArrowRight className="text-muted-foreground/30 mx-auto" size={24} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile arrow indicators */}
            <div className="flex justify-center items-center gap-2 mt-8 lg:hidden">
              {philosophySteps.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-primary/30"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="gradient-border-card card-glow p-8 lg:p-12 glass">
            <h3 className="text-2xl font-bold text-center mb-12">Student Journey Timeline</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />
              
              <div className="space-y-8">
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + index * 0.1, 
                      ease: "easeOut" 
                    }}
                    className="relative flex items-center gap-6 group"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-green-100' :
                        step.status === 'active' ? 'bg-blue-100' : 'bg-gray-100'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="text-green-500" size={24} />
                        ) : (
                          <div className={`w-3 h-3 rounded-full ${
                            step.status === 'active' ? 'bg-blue-500' : 'bg-gray-400'
                          }`} />
                        )}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 gradient-border-card card-glow p-6 glass">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h4 className="font-bold text-foreground text-lg mb-2">{step.title}</h4>
                          <p className="text-muted-foreground mb-2">{step.description}</p>
                          <span className={`text-sm font-medium ${
                            step.status === 'completed' ? 'text-green-600' :
                            step.status === 'active' ? 'text-blue-600' : 'text-gray-500'
                          }`}>
                            {step.duration}
                          </span>
                        </div>
                        
                        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                          step.status === 'completed' ? 'bg-green-100 text-green-700' :
                          step.status === 'active' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {step.status === 'completed' ? 'Completed' :
                           step.status === 'active' ? 'Active' : 'Upcoming'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPhilosophy;
