import About from "../About/aboutSection";
import Education from "../Education/educationSection";
import Expreince from "../Expreince/expreinceSection";
import Skills from "../Skills/skillsSection";
import "./inputSidebar.css";

export default function InputSidebar({
  firstName,
  onFirstNameChange,
  lastName,
  onLastNameChange,
  profession,
  onProfessionChange,
  email,
  onEmailChange,
  phoneNumber,
  onPhoneNumberChange,
  educationList,
  onAddEducation,
  onDeleteEducation,
  onUpdateEducation,
  skillsList,
  onAddSkill,
  onDeleteSkill,
  onUpdateSkill,
  workList,
  onAddWork,
  onDeleteWork,
  onUpdateWork,
}) {
  return (
    <aside>
      <h1 className="websiteTitle">Resume Builder</h1>
      <hr />
      <form>
        <section className="card">
          <h2>About You</h2>
          <hr />
          <About
            firstName={firstName}
            onFirstNameChange={onFirstNameChange}
            lastName={lastName}
            onLastNameChange={onLastNameChange}
            profession={profession}
            onProfessionChange={onProfessionChange}
            email={email}
            onEmailChange={onEmailChange}
            phoneNumber={phoneNumber}
            onPhoneNumberChange={onPhoneNumberChange}
          ></About>
        </section>
        <section className="card">
          <h2>Education</h2>
          <hr />
          {educationList.map((edu) => (
            <Education
              key={edu.id}
              edu={edu}
              onUpdateEducation={onUpdateEducation}
              onDeleteEducation={onDeleteEducation}
            />
          ))}
          <button type="button" className="addBtn" onClick={onAddEducation}>
            + Add Education
          </button>
        </section>
        <section className="card">
          <h2>Technologies</h2>
          <hr />
          {skillsList.map((skill) => (
            <Skills
              key={skill.id}
              skill={skill}
              onUpdateSkill={onUpdateSkill}
              onDeleteSkill={onDeleteSkill}
            ></Skills>
          ))}
          <button type="button" className="addBtn" onClick={onAddSkill}>
            + Add Skill
          </button>
        </section>
        <section className="card">
          <h2>Expreince</h2>
          <hr />
          {workList.map((work) => (
            <Expreince
              key={work.id}
              work={work}
              onUpdateWork={onUpdateWork}
              onDeleteWork={onDeleteWork}
            ></Expreince>
          ))}
          <button type="button" className="addBtn" onClick={onAddWork}>
            + Add Work
          </button>
        </section>
      </form>
      <button type="button" className="printBtn" onClick={() => window.print()}>
        Print / Save PDF
      </button>
    </aside>
  );
}
