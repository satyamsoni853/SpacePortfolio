import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import WhoIAm from "@/components/main/WhoIAm";
import Services from "@/components/main/Services";
import Experience from "@/components/main/Experience";
import Education from "@/components/main/Education";
import Projects from "@/components/main/Projects";
import Certification from "@/components/main/Certification";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <section className="snap-start w-full min-h-screen flex items-center justify-center">
          <Hero />
        </section>
        <section className="snap-start w-full h-auto py-20 flex items-center justify-center">
          <WhoIAm />
        </section>
        <section className="snap-start w-full h-auto py-20">
          <Skills />
        </section>
        <section className="snap-start w-full h-auto py-20 flex items-center justify-center">
          <Experience />
        </section>
        <section className="snap-start w-full h-auto py-20 flex items-center justify-center">
          <Services />
        </section>
        <section className="snap-start w-full h-auto py-20 flex items-center justify-center">
          <Education />
        </section>

        <section className="snap-start w-full h-auto py-20 flex items-center justify-center">
          <Projects />
        </section>
        <section className="snap-start w-full h-auto py-20 flex items-center justify-center">
          <Certification />
        </section>
        <section className="snap-start w-full h-auto py-20 flex items-center justify-center">
          <Contact />
        </section>
        <section className="snap-start w-full h-auto flex items-center justify-center">
          <Footer />
        </section>
      </div>
    </main>
  );
}
