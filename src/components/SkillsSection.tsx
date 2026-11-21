import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Enterprise UI", items: ["Unqork", "UI Configuration", "Component Styling", "Controlled Overrides", "UI POC Development"] },
  { category: "Styling & Architecture", items: ["SCSS Architecture", "CSS3", "SASS/SCSS", "CSS Grid & Flexbox", "Media Queries", "Bootstrap 4/5", "Tailwind CSS"] },
  { category: "Front-End", items: ["HTML5", "JavaScript", "TypeScript", "React", "Material UI", "jQuery", "Git & GitHub", "Chrome DevTools"] },
  { category: "Accessibility & Quality", items: ["WCAG", "Web Accessibility", "Responsive Design", "Cross-Browser Testing", "Lighthouse", "GTmetrix"] },
  { category: "Design to Code & Process", items: ["Figma-to-production", "Design Systems", "Agile/Scrum", "Jira", "VS Code", "Mentoring"] },
  { category: "AI & Productivity", items: ["AI-assisted development", "Claude", "ChatGPT", "Google AI Studio", "Prompt Engineering"] },
];

const certifications = [
  "Claude Academy: AI Fluency, Framework & Foundations – Anthropic",
  "Claude 101 – Anthropic",
  "Google AI Essentials – Coursera",
  "Generative AI Fundamentals – Databricks",
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
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
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
          <ul className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <li key={cert} className="px-4 py-2 text-sm border border-border rounded-lg text-muted-foreground">
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
