import Navbar from "@/components/Navbar/Navbar";
import AboutSection from "@/components/Sections/About/About";
import HomeSection from "@/components/Sections/Home/Home";
import ProjectsSection from "@/components/Sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />

        <section id="knowledge" className="max-w-[1320px] mx-auto flex justify-between items-center h-[70vh] bg-black">
          <h1>Conhecimentos</h1>
        </section>

        <section id="contact" className="max-w-[1320px] mx-auto flex justify-between items-center h-[70vh] bg-black">
          <h1>Contato</h1>
        </section>
      </main>
    </>
  );
}
