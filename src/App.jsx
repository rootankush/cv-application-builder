import { useState } from "react";
import MainViewer from "./components/Main/main-viewer";
import InputSidebar from "./components/SideBar/inputSidebar";

import {
  initialEducationDetails,
  initialPersonalDetails,
  initialSkillsDetails,
  initialWorkDetails,
} from "./data/data";

export default function App() {
  //About
  const [firstName, setFirstName] = useState(initialPersonalDetails.firstName);
  const [lastName, setLastName] = useState(initialPersonalDetails.lastName);
  const [profession, setProfession] = useState(
    initialPersonalDetails.profession,
  );
  const [phoneNumber, setPhoneNumber] = useState(
    initialPersonalDetails.phoneNumber,
  );
  const [email, setEmail] = useState(initialPersonalDetails.email);

  // Education
  const [collageName, setCollageName] = useState(
    initialEducationDetails.collageName,
  );
  const [degree, setDegree] = useState(initialEducationDetails.degree);
  const [startDate, setStartDate] = useState(initialEducationDetails.startDate);
  const [endDate, setEndDate] = useState(initialEducationDetails.endDate);
  const [location, setLocation] = useState(initialEducationDetails.location);

  //Technologie
  const [skills, setSkills] = useState(initialSkillsDetails.skills);

  //Expreince
  const [jobTitle, setJobTitle] = useState(initialWorkDetails.jobTitle);
  const [jobStartDate, setJobStartDate] = useState(
    initialWorkDetails.startDate,
  );
  const [jobEndDate, setJobEndDate] = useState(initialWorkDetails.endDate);
  const [jobResponsibility, setJobResponsibility] = useState(
    initialWorkDetails.responsibilities,
  );

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
