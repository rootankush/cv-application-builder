import About from "../About/aboutSection";
import Education from "../Education/educationSection";
import Skills from "../Skills/skillsSection";
import Expreince from "../Expreince/expreinceSection";
import "./inputSidebar.css";

export default function InputSidebar() {
  return (
    <aside>
      <h1>Resume Builder</h1>
      <form>
        <section>
          <h2>About You</h2>
          <About></About>
        </section>
        <section>
          <h2>Education</h2>
          <Education></Education>
        </section>
        <section>
          <h2>Skills</h2>
          <Skills></Skills>
        </section>
        <section>
          <h2>Expreince</h2>
          <Expreince></Expreince>
        </section>
      </form>
    </aside>
  );
}
