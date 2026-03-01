import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="section-container">
        <div className="glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              About<span className="text-primary">.</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              I am a Senior UI / UX Engineer with over 10 years of experience building scalable, accessible, 
              and enterprise-grade web applications. My expertise lies in UI architecture, styling systems, 
              and design-to-code accuracy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in low-code platforms like Unqork, where clean CSS structure and controlled overrides 
              are critical. I collaborate closely with clients, UX designers, business analysts, project managers, 
              and platform leads to translate complex business requirements into pixel-perfect, maintainable, 
              and high-quality UI solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently focused on UI-first React engineering, accessibility-driven development, 
              performance optimization, and building maintainable, scalable UI architectures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
