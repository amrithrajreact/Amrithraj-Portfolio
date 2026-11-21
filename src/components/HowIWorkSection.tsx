import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const steps = [
  "Requirement understanding with client & stakeholders",
  "UX design feasibility review (Figma vs Unqork)",
  "POC validation for complex UI scenarios",
  "SCSS architecture planning",
  "Component-based styling implementation",
  "Accessibility validation",
  "Version control via Git",
  "Sprint-based delivery using Jira",
];

const recognition = [
  "Award of Excellence – UI quality and delivery",
  "Spot Award – UI quality and delivery",
  "Team Excellence Award",
  "Repeated appreciation from project managers and leadership for UI quality, performance and design accuracy",
];

const strengths = [
  "Enterprise UI ownership (Unqork)",
  "Clean, scalable SCSS architecture",
  "Pixel-accurate Figma-to-production delivery",
  "No critical UI defects raised in UAT",
  "Mentoring: 10 junior UX engineers and Unqork developers",
  "Accessibility-focused implementation",
  "AI-assisted development with human review of everything shipped",
];

const HowIWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24" ref={ref}>
      <div className="section-container">
        <div className="glow-line mb-16" />

        <div className="grid md:grid-cols-3 gap-10">
          {/* How I Work */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              How I Work<span className="text-primary">.</span>
            </h2>
            <ol className="space-y-3">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span aria-hidden="true" className="text-primary font-display text-sm font-semibold mt-0.5 shrink-0 w-5 text-right">
                    {i + 1}.
                  </span>
                  <span className="text-muted-foreground text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Recognition<span className="text-primary">.</span>
            </h2>
            <ul className="space-y-3">
              {recognition.map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What I Bring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              What I Bring<span className="text-primary">.</span>
            </h2>
            <ul className="space-y-3">
              {strengths.map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
