import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Toolkit from "./components/Toolkit";
import Values from "./components/Values";
import Contact from "./components/Contact";

const App = () => (
  <>
    <Navbar />
    <main>
      <Intro />
      <Timeline />
      <Work />
      <Projects />
      <Toolkit />
      <Values />
    </main>
    <Contact />
  </>
);

export default App;
