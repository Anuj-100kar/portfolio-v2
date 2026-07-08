import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Projects from "../sections/Projects/Projects";
import Timeline from "../sections/Timeline/Timeline";
import Services from "../sections/Services/services";
import Contact from "../sections/Contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
       <About />
      <Projects />
       <Timeline />
     
      <Services />
      <Contact/>
      
    </>
  );
}