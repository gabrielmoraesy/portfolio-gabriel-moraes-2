import Navbar from "@/components/Navbar/Navbar";
import ContactSection from "@/components/Sections/Contact/Contact";
import HomeSection from "@/components/Sections/Home/Home";
import KnowledgeSection from "@/components/Sections/Knowledge/Knowledge";
import NewAbout from "@/components/Sections/NewAbout/About";
import ProjectsSection from "@/components/Sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <NewAbout />
        <ProjectsSection />
        <KnowledgeSection />
        <ContactSection />
      </main>
    </>
  );
}
