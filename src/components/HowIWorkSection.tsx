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
  "Excellence Award – Enterprise UI Delivery",
  "Spot Award – Styling Quality & UI Consistency",
  "Client appreciation for smooth user experience and low defects",
];

const strengths = [
  "Enterprise UI ownership",
  "Platform-aware styling expertise",
  "Clean, scalable SCSS architecture",
  "Low-defect UI delivery",
  "Strong collaboration across teams",
  "Accessibility-focused design implementation",
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
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-primary font-display text-sm font-semibold mt-0.5 shrink-0 w-5 text-right">
                    {i + 1}.
                  </span>
                  <span className="text-muted-foreground text-sm">{step}</span>
                </div>
              ))}
            </div>
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
            <div className="space-y-3">
              {recognition.map((item) => (
                <div key={item} className="flex gap-2 items-start">
                  <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
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
            <div className="space-y-3">
              {strengths.map((item) => (
                <div key={item} className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
