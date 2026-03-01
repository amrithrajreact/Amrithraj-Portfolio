import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    company: "Aiden AI Pvt Ltd",
    role: "Senior UI Engineer",
    period: "Jul 2024 – Present",
    location: "Hyderabad",
    highlights: [
      "Led UI implementation and styling for multiple enterprise Unqork applications",
      "Built responsive UI layouts with consistent spacing, typography, and grid systems",
      "Created scalable SCSS architecture with reusable patterns and naming conventions",
      "Mentored junior engineers on HTML, CSS, SCSS, and Git workflows",
    ],
    awards: ["Excellence Award", "Spot Award"],
  },
  {
    company: "I-PAC",
    role: "Lead Analyst",
    period: "Jun 2023 – Jul 2024",
    highlights: [
      "Spearheaded website redesign with responsive development focus",
      "Enhanced user interaction through JavaScript and jQuery",
      "Implemented performance optimization techniques",
    ],
  },
  {
    company: "Motivitylabs",
    role: "Software Engineer",
    period: "Oct 2022 – May 2023",
    highlights: [
      "Led React.js application development with Bootstrap 5 and Material UI",
      "Configured routing with React Router and integrated Material UI components",
      "Played a key role in the Enterprise Architect Team",
    ],
  },
  {
    company: "Sreeal Technologies Pvt Ltd",
    role: "UI Developer",
    period: "Sep 2016 – Mar 2021",
    highlights: [
      "Developed front-end using HTML5, CSS3, JavaScript, jQuery with Bootstrap",
      "Ensured compliance with industry standards and cross-browser compatibility",
      "Optimized websites for speed and performance",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "System Engineer",
    period: "Dec 2012 – Oct 2015",
    highlights: [
      "Conducted user flow analysis and accessibility assessment",
      "Implemented web accessibility standards using HTML, CSS, and JavaScript",
    ],
    awards: ["Best Team Award", "Star Team Award"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="section-container">
        <div className="glow-line mb-16" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold mb-14"
        >
          Experience<span className="text-primary">.</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="glass-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-foreground font-display font-semibold text-lg flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {exp.company}
                      </h3>
                      <p className="text-primary text-sm">{exp.role}</p>
                    </div>
                    <span className="text-muted-foreground text-sm font-display shrink-0">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5 mb-3">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {exp.awards && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                      {exp.awards.map((award) => (
                        <span key={award} className="flex items-center gap-1 text-xs text-primary">
                          <Award className="w-3 h-3" /> {award}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
