import { motion } from "framer-motion";
import {
  Globe,
  Users,
  GraduationCap,
  HeartHandshake,
  Network,
  Sparkles,
} from "lucide-react";
import SectionBackground from "@/components/SectionBackground";
import BrandLogo from "@/components/BrandLogo";

const alumniBenefits = [
  "Help students make informed decisions while choosing universities across different countries.",
  "Connect with seniors already studying at top global institutions.",
  "Receive mentorship on academics, university life, internships, and career opportunities.",
  "Build lifelong friendships and professional relationships across continents.",
  "Stay connected with a community that continues to support one another long after school.",
];

const pillars = [
  {
    icon: Users,
    title: "100 Students Only",
    desc: "An intentionally limited cohort for personalized guidance and individual attention.",
  },
  {
    icon: Globe,
    title: "One Global Community",
    desc: "High-achieving students from India, USA, Canada, Gulf, Australia, Singapore & beyond.",
  },
  {
    icon: GraduationCap,
    title: "Personal Mentorship",
    desc: "Direct guidance under Abhinav Sir — extraordinary outcomes through extraordinary mentorship.",
  },
  {
    icon: Network,
    title: "Lifetime Alumni Network",
    desc: "A trusted global platform that grows stronger with each graduating cohort.",
  },
];

const VisionSection = () => {
  return (
    <section id="vision" className="section-dark py-24 relative">
      <SectionBackground variant="dark" intensity="medium" />
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BrandLogo size="lg" className="mx-auto mb-8" />
          <p className="si-label mb-3">Our Vision</p>
          <h2 className="si-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            The <span className="gradient-text">HUNDRED</span> Global
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At The HUNDRED Global, we believe that extraordinary outcomes are
            achieved through extraordinary mentorship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="gradient-border-card card-glow p-8 md:p-10 glass max-w-4xl mx-auto mb-16"
        >
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Every year, only{" "}
            <strong className="text-foreground">100 carefully selected students</strong>{" "}
            from India, the United States, Canada, the Gulf, Australia, Singapore,
            and other parts of the world will be invited to join this exclusive
            mathematics program under the personal mentorship of{" "}
            <strong className="text-foreground">Abhinav Sir</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            By intentionally limiting the cohort to just 100 students, we create
            an environment where every learner receives personalized guidance,
            individual attention, and becomes part of a close-knit community of
            high-achieving students from diverse cultures and educational
            backgrounds.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gradient-border-card card-glow p-6 glass text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <pillar.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <HeartHandshake className="text-primary" size={24} />
            <h3 className="text-2xl font-bold text-foreground">
              The HUNDRED Global Alumni Network
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Beyond academics, every student will become a lifelong member of The
            HUNDRED Global Alumni Network—a global community that grows stronger
            with each passing year. As our students graduate and pursue higher
            education at leading universities across the world, this network will
            serve as a trusted platform to:
          </p>
          <ul className="space-y-4 mb-12">
            {alumniBenefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="leading-relaxed">{benefit}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="gradient-premium rounded-2xl p-8 md:p-10 text-center"
          >
            <Sparkles className="text-white/80 mx-auto mb-4" size={28} />
            <p className="text-white/90 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              Our vision is not to build the largest coaching institute. Our
              vision is to build the world's most trusted global mathematics
              community—where every student is personally mentored, connected
              for life, and empowered to thrive at the world's leading
              universities and beyond.
            </p>
            <p className="text-white font-bold text-xl md:text-2xl tracking-wide">
              100 Students. One Global Community. A Lifetime of Opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
