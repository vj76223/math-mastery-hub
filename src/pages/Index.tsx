import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/ResultsSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import LearningPhilosophy from "@/components/LearningPhilosophy";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <ResultsSection />
      <CoursesSection />
      <WhyChooseSection />
      <LearningPhilosophy />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
