import About from "./components/About/aboutSection";
import Education from "./components/Education/educationSection";
// import Skills from "./components/Skills/skillsSection";
// import Expreince from "./components/Expreince/expreinceSection";
import MainViewer from "./components/Main/main-viewer";
import InputSidebar from "./components/SideBar/inputSidebar";
import { useState } from "react";

export default function App() {
  //About
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  // Education
  const [collageName, setCollageName] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  //Technologie
  const [skills, setSkills] = useState("");

  //Expreince
  const [jobTitle, setJobTitle] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [jobResponsibility, setJobResponsibility] = useState("");

  return (
    <div className="main-container">
      <InputSidebar
        firstName={firstName}
        lastName={lastName}
        profession={profession}
        phoneNumber={phoneNumber}
        email={email}
        collageName={collageName}
        degree={degree}
        startDate={startDate}
        endDate={endDate}
        location={location}
        skills={skills}
        jobTitle={jobTitle}
        jobStartDate={jobStartDate}
        jobEndDate={jobEndDate}
        jobResponsibility={jobResponsibility}
        onFirstNameChange={setFirstName}
        onLastNameChange={setLastName}
        onProfessionChange={setProfession}
        onPhoneNumberChange={setPhoneNumber}
        onEmailChange={setEmail}
        onCollageNameChange={setCollageName}
        onDegreeChange={setDegree}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onLocationChange={setLocation}
        onSkillsChange={setSkills}
        onJobTitleChange={setJobTitle}
        onJobStartDateChange={setJobStartDate}
        onJobEndDateChange={setJobEndDate}
        onResponsibilityChange={setJobResponsibility}
      ></InputSidebar>
      <MainViewer
        firstName={firstName}
        lastName={lastName}
        profession={profession}
        phoneNumber={phoneNumber}
        email={email}
        collageName={collageName}
        degree={degree}
        startDate={startDate}
        endDate={endDate}
        location={location}
        skills={skills}
        jobTitle={jobTitle}
        jobStartDate={jobStartDate}
        jobEndDate={jobEndDate}
        jobResponsibility={jobResponsibility}
      ></MainViewer>
    </div>
  );
}
