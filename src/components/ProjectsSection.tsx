import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Agent Onboarding Platform",
    domain: "Insurance Domain",
    overview: "Enterprise web application designed to onboard insurance agents through structured workflows.",
    role: "Senior UI Engineer – Styling & UI architecture ownership.",
    contributions: [
      "Styled Unqork components using structured SCSS architecture",
      "Implemented pixel-perfect UI from Figma designs",
     "Built reusable styling modules reducing future styling effort by ~30%",
      "Designed layouts using CSS Grid & Flexbox",
      "Ensured desktop responsiveness (1200px–1920px)",
      "Implemented accessibility based on Unqork compatibility",
      "Reduced UI defects to minimal levels",
    ],
    process: [
      "Pre-discovery client discussions",
      "Figma feasibility reviews",
      "Aligned with UXD, BA, PM, engagement & Unqork leads",
      "Built UI POCs for alternate design solutions",
      "Tracked work through Jira & Git",
    ],
    outcomes: [
      "Achieved <5 minor UI defects during QA & UAT phases",
      "Client-reported UI enhancements reduced by ~40% compared to previous projects",
      "High design accuracy",
      "Low defect rate during QA & UAT",
      "Smooth onboarding flow improving user task completion efficiency",
      "Recognized with Excellence Award for UI contribution",
    ],
    awards: ["Excellence Award"],
  },
  {
    title: "Underwriting Metrics Dashboard & Workflows",
    domain: "Enterprise Underwriting",
    overview: "Enterprise underwriting dashboard displaying metrics and structured workflows.",
    role: "Senior UI Engineer – Lead Styling Contributor.",
    contributions: [
      
      "Overcame multiple Unqork platform limitations through structured UI POCs",
      "Maintained consistent design language using existing design tokens",
      "Styled complex dashboard layouts using advanced CSS Grid systems",
      "Built reusable SCSS components improving scalability",
      "Delivered rapid UI enhancements within 24–48 hours based on client feedback",
      "Ensured cross-browser compatibility and accessibility compliance",
      "Improved visual hierarchy, spacing & typography consistency",
      "Provided UI design solutions when UXD support was unavailable",
      "Maintained desktop responsiveness and cross-browser compatibility",
      "Performed accessibility checks within platform constraints",
      "Delivered UI with minimal defects",
 ,
     
    
    ],
    process: [
   
      "Performed deep feasibility validation before implementation",
      "Aligned with UXD, BA, PM, engagement & Unqork leads",
      "Presented multiple alternate UI approaches to stakeholders",
      "Collaborated closely with client teams for workflow refinement",
      "Iterated quickly during UAT cycles for enhancement requests",
    ],
    outcomes: [
      "Achieved <3 minor UI defects during QA & UAT",
      "Reduced UI enhancement turnaround time by ~50%",
      "Received direct client appreciation for responsiveness & UI quality",
      "Improved dashboard usability and visual clarity for underwriting teams",
      "Recognized by Global Head and awarded Spot Award for outstanding UI contribution",
    ],
  awards: ["Spot Award"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        <div className="glow-line mb-16" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold mb-14"
        >
          Enterprise Projects<span className="text-primary">.</span>
        </motion.h2>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 md:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <span className="text-primary font-display text-xs tracking-wider uppercase">
                    {project.domain}
                  </span>
                  <h3 className="text-foreground font-display font-semibold text-xl mt-1">
                    {project.title}
                  </h3>
                </div>
                {project.awards.length > 0 && (
                  <div className="flex gap-2 shrink-0">
                    {project.awards.map((award) => (
                      <span key={award} className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-display">
                        <Award className="w-3 h-3" /> {award}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-muted-foreground text-sm mb-2">{project.overview}</p>
              <p className="text-foreground/70 text-sm mb-5 italic">{project.role}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-primary font-display text-xs tracking-wider uppercase mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-1.5">
                    {project.contributions.map((c, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.process.length > 0 && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-primary font-display text-xs tracking-wider uppercase mb-3">
                        Process & Collaboration
                      </h4>
                      <ul className="space-y-1.5">
                        {project.process.map((p, j) => (
                          <li key={j} className="text-muted-foreground text-sm flex gap-2">
                            <span className="text-primary mt-0.5 shrink-0">▸</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.outcomes.length > 0 && (
                      <div>
                        <h4 className="text-primary font-display text-xs tracking-wider uppercase mb-3">
                          Outcomes
                        </h4>
                        <ul className="space-y-1.5">
                          {project.outcomes.map((o, j) => (
                            <li key={j} className="text-muted-foreground text-sm flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
