import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import HowIWorkSection from "../components/HowIWorkSection";
import ContactSection from "../components/ContactSection";
import ShaderDivider from "../components/ShaderDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
       <ScrollToTop />
      <HeroSection />
      <ShaderDivider />
      <AboutSection />
      <ShaderDivider />
      <SkillsSection />
      <ShaderDivider />
      <ExperienceSection />
      <ShaderDivider />
      <ProjectsSection />
      <ShaderDivider />
      <HowIWorkSection />
      <ShaderDivider />
      <ContactSection />
    </div>
  );
};

export default Index;
