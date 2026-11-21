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
              I am a Specialist UX Engineer with 10+ years of experience building accessible,
              responsive enterprise interfaces. I specialize in Unqork UI styling, SCSS
              architecture and pixel-accurate Figma-to-production delivery for insurance and
              underwriting platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I joined Aiden AI I had no Unqork experience. I completed the platform
              training, earned the Unqork Novice Configurator badge, and grew into owning UI
              styling and architecture for enterprise applications. I work directly with
              clients, UX designers and business analysts, join client and design review calls,
              and build proofs of concept when a platform has limits.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I mentor 10 junior UX engineers and Unqork developers, and I use AI-assisted
              development (Claude, ChatGPT, Google AI Studio) with human review of everything I
              ship. I am open to Specialist / Lead UX Engineer and UI Architect roles in
              enterprise, Unqork and design-system teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
