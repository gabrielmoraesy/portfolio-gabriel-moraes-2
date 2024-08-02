import Navbar from "@/components/Navbar/Navbar";
import HomeSection from "@/components/Sections/Home/Home";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />

        <section id="about" className="max-w-[1320px] mx-auto flex justify-between items-center h-[70vh] bg-black border-b border-white">
          <h1>Sobre</h1>
        </section>

        <section id="projects" className="max-w-[1320px] mx-auto flex justify-between items-center h-[70vh] bg-black border-b border-white">
          <h1>Projetos</h1>
        </section>

        <section id="knowledge" className="max-w-[1320px] mx-auto flex justify-between items-center h-[70vh] bg-black border-b border-white">
          <h1>Conhecimentos</h1>
        </section>

        <section id="contact" className="max-w-[1320px] mx-auto flex justify-between items-center h-[70vh] bg-black border-b border-white">
          <h1>Contato</h1>
        </section>
      </main>
    </>
  );
}
