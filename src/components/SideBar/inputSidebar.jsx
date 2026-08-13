import About from "../About/aboutSection";
import Education from "../Education/educationSection";
import Skills from "../Skills/skillsSection";
import Expreince from "../Expreince/expreinceSection";
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
  collageName,
  onCollageNameChange,
  degree,
  onDegreeChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  location,
  onLocationChange,
  skills,
  onSkillsChange,
  jobTitle,
  onJobTitleChange,
  jobStartDate,
  onJobStartDateChange,
  jobEndDate,
  onJobEndDateChange,
  jobResponsibility,
  onResponsibilityChange,
}) {
  return (
    <aside>
      <h1>Resume Builder</h1>
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
          <Education
            collageName={collageName}
            onCollageNameChange={onCollageNameChange}
            degree={degree}
            onDegreeChange={onDegreeChange}
            startDate={startDate}
            onStartDateChange={onStartDateChange}
            endDate={endDate}
            onEndDateChange={onEndDateChange}
            location={location}
            onLocationChange={onLocationChange}
          ></Education>
        </section>
        <section className="card">
          <h2>Technologies</h2>
          <hr />
          <Skills skills={skills} onSkillsChange={onSkillsChange}></Skills>
        </section>
        <section className="card">
          <h2>Expreince</h2>
          <hr />
          <Expreince
            jobTitle={jobTitle}
            onJobTitleChange={onJobTitleChange}
            jobStartDate={jobStartDate}
            onJobStartDateChange={onJobStartDateChange}
            jobEndDate={jobEndDate}
            onJobEndDateChange={onJobEndDateChange}
            jobResponsibility={jobResponsibility}
            onResponsibilityChange={onResponsibilityChange}
          ></Expreince>
        </section>
      </form>
    </aside>
  );
}
