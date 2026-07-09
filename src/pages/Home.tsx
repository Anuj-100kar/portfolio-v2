import Hero from "../sections/Hero/Hero";

import Services from "../sections/Services/Services";
import Contact from "../sections/Contact/Contact";
import About from "../sections/About/About";
import Projects from "../sections/Projects/Projects";
import Timeline from "../sections/Timeline/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Projects/>
      <Timeline/>
      <Services />
      <Contact/>
    </>
  );
}