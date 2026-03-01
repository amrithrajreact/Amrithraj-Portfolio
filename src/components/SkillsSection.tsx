import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Frontend & Styling", items: ["HTML5", "CSS3", "SCSS", "Tailwind CSS", "Bootstrap 4/5", "CSS Grid & Flexbox", "React JS", "JavaScript", "jQuery"] },
  { category: "Tools & Platforms", items: ["Unqork", "Figma", "Git & GitHub", "VS Code", "Jira", "Chrome DevTools"] },
  { category: "Performance & Quality", items: ["Lighthouse", "GTmetrix", "Web Accessibility", "Cross-Browser Testing", "Responsive Design"] },
  { category: "Process", items: ["Agile/Scrum", "SCSS Architecture", "Design Systems", "UI POC Development", "Mentoring"] },
];

const certifications = [
  "Google AI Essentials – Coursera",
  "CSS for Designers – Uxcel",
  "Introduction to Figma – Uxcel",
  "Unqork Novice Configurator – Unqork",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="section-container">
        <div className="glow-line mb-16" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold mb-14"
        >
          Skills & Expertise<span className="text-primary">.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-primary font-display text-sm tracking-wider uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-primary font-display text-sm tracking-wider uppercase mb-4">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span key={cert} className="px-4 py-2 text-sm border border-border rounded-lg text-muted-foreground">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
