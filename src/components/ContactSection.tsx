import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="section-container">
        <div className="glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's Connect<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Open to new opportunities and collaborations in enterprise UI engineering.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <a
              href="mailto:amrithraj879@gmail.com"
              className="glass-card p-5 flex items-center gap-3 hover:border-primary/50 transition-colors group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                amrithraj879@gmail.com
              </span>
            </a>
            <a
              href="tel:+919908586151"
              className="glass-card p-5 flex items-center gap-3 hover:border-primary/50 transition-colors group"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                +91 9908586151
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/amrithrajnalam/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-3 hover:border-primary/50 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                LinkedIn Profile
              </span>
            </a>
            <div className="glass-card p-5 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Hyderabad, India</span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border/30 text-center">
          {/* <p className="text-muted-foreground text-sm">
            © 2026 Amrithraj Nalam. Crafted with precision.
          </p> */}
           <p className="text-muted-foreground text-sm">
    © {new Date().getFullYear()} Amrithraj Nalam. Crafted with precision.
  </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
