import Navbar from "@/components/Navbar/Navbar";
import AboutSection from "@/components/Sections/About/About";
import ContactSection from "@/components/Sections/Contact/Contact";
import HomeSection from "@/components/Sections/Home/Home";
import KnowledgeSection from "@/components/Sections/Knowledge/Knowledge";
import ProjectsSection from "@/components/Sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <KnowledgeSection />
        <ContactSection />
      </main>
    </>
  );
}
