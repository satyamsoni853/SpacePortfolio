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
      <div className="flex flex-col gap-20">
        <Hero />
        <WhoIAm />
        <Skills />
        <Services />
        <Experience />
        <Education />
        <Projects />
        <Certification />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
