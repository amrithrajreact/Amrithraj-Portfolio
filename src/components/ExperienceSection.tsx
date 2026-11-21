import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    company: "Aiden AI Pvt Ltd",
    role: "Specialist UX Engineer",
    period: "Aug 2026 – Present",
    highlights: [
      "Ramped up on the Unqork low-code platform from scratch, earned the Unqork Novice Configurator badge, then took ownership of UI styling for two enterprise applications",
      "Own UI architecture and styling for the Agent Onboarding Platform (insurance) and the Underwriting Metrics Dashboard",
      "Lead end-to-end UI delivery across design, client review and QA, aligning UI decisions with business goals",
      "Created internal UI guidelines and styling checklists to standardize delivery across the team",
    ],
  },
  {
    company: "Aiden AI Pvt Ltd",
    role: "Senior UX Engineer",
    period: "Jul 2024 – Jul 2026",
    highlights: [
      "Cut future styling effort by ~30% by building a reusable SCSS module library for Unqork applications",
      "Reduced UI enhancement turnaround by ~50% on the Underwriting Metrics Dashboard through reusable styling patterns",
      "Delivered UI with no critical defects raised in UAT, passing on pixel-accuracy against Figma with minimal rework",
      "Built UI proofs of concept (custom dropdown, gauge charts) that worked around Unqork platform limits",
      "Mentored 10 junior UX engineers and Unqork developers in HTML, CSS, JavaScript, SCSS, Git and Unqork styling",
    ],
    awards: ["Award of Excellence", "Spot Award", "Team Excellence Award"],
  },
  {
    company: "I-PAC",
    role: "Lead Analyst (Front-End / UI Development)",
    period: "Jun 2023 – Jul 2024",
    highlights: [
      "Led the responsive redesign of the organization's website, converting design mockups into pixel-accurate HTML/CSS templates",
      "Improved user engagement with JavaScript and jQuery interactions, performance optimization and cross-browser testing",
      "Collaborated with backend developers on SQL-backed integration",
    ],
  },
  {
    company: "Motivity Labs Inc",
    role: "Software Engineer",
    period: "Oct 2022 – May 2023",
    highlights: [
      "Led development of a React.js application using React Router, Bootstrap 5, React-Bootstrap and Material UI, with API integration via axios/fetch",
      "Served as training coordinator and Enterprise Architect Team member, resolving CSS and responsive design issues",
      "Produced flow diagrams and business requirement documents",
    ],
  },
  {
    company: "Sreeal Technologies Pvt Ltd",
    role: "UI Developer",
    period: "Sep 2016 – Mar 2021",
    highlights: [
      "Built responsive front-ends with HTML5, CSS3, JavaScript, jQuery and Bootstrap across 4+ years of end-to-end project delivery",
      "Improved website speed and user experience through optimization, browser compatibility testing and coding standards",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "System Engineer",
    period: "Dec 2012 – Oct 2015",
    highlights: [
      "Conducted user flow analysis and accessibility assessments, and implemented web accessibility standards in HTML, CSS and JavaScript",
      "Earned “Excellent” client feedback and recognition for presenting a UI/UX business model to client leadership",
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
                key={`${exp.company}-${exp.role}`}
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
                        <Briefcase className="w-4 h-4 text-primary" aria-hidden="true" />
                        {exp.company}
                      </h3>
                      <p className="text-primary text-sm">{exp.role}</p>
                    </div>
                    <span className="text-muted-foreground text-sm font-display shrink-0">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5 mb-3">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0" aria-hidden="true">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {exp.awards && (
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-border/50">
                      {exp.awards.map((award) => (
                        <span key={award} className="flex items-center gap-1 text-xs text-primary">
                          <Award className="w-3 h-3" aria-hidden="true" /> {award}
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
