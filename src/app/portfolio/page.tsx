import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/Sections/About/About";
import ContactSection from "@/components/Sections/Contact/Contact";
import HomeSection from "@/components/Sections/Home/Home";
import KnowledgeSection from "@/components/Sections/Knowledge/Knowledge";
import ProjectsSection from "@/components/Sections/Projects/Projects";
import Footer from "@/components/Sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <About />
        <ProjectsSection />
        <KnowledgeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
