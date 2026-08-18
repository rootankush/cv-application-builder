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
  const [educationList, setEducationList] = useState([
    {
      id: crypto.randomUUID(),
      collageName: initialEducationDetails.collageName,
      degree: initialEducationDetails.degree,
      startDate: initialEducationDetails.startDate,
      endDate: initialEducationDetails.endDate,
      aboutCollage: initialEducationDetails.aboutCollage,
    },
  ]);

  //Technologie
  const [skillsList, setSkillsList] = useState(initialSkillsDetails);

  //Expreince
  const [workList, setWorkList] = useState([
    {
      id: crypto.randomUUID(),
      companyName: initialWorkDetails.companyName,
      jobTitle: initialWorkDetails.jobTitle,
      jobStartDate: initialWorkDetails.startDate,
      jobEndDate: initialWorkDetails.endDate,
      jobResponsibility: initialWorkDetails.responsibilities,
    },
  ]);

  function handleAddEducation() {
    const newEducation = {
      id: crypto.randomUUID(),
      collageName: "",
      degree: "",
      startDate: "",
      endDate: "",
      aboutCollage: "",
    };

    setEducationList([...educationList, newEducation]);
  }

  function handleDeleteEducation(index) {
    setEducationList(educationList.filter((edu) => edu.id !== index));
  }

  function handleUpdateEducation(index, field, value) {
    setEducationList(
      educationList.map((edu) => {
        if (edu.id === index) {
          return { ...edu, [field]: value };
        }
        return edu;
      }),
    );
  }

  function handleAddSkill() {
    const newSkill = {
      id: crypto.randomUUID(),
      skills: "",
    };

    setSkillsList([...skillsList, newSkill]);
  }

  function handleDeleteSkill(index) {
    setSkillsList(skillsList.filter((skill) => skill.id !== index));
  }

  function handleUpdateSkill(index, field, value) {
    setSkillsList(
      skillsList.map((skill) => {
        if (skill.id === index) {
          return { ...skill, [field]: value };
        }
        return skill;
      }),
    );
  }

  function handleAddWork() {
    const newWork = {
      id: crypto.randomUUID(),
      companyName: "",
      jobTitle: "",
      jobStartDate: "",
      jobEndDate: "",
      jobResponsibility: "",
    };

    setWorkList([...workList, newWork]);
  }

  function handleDeleteWork(index) {
    setWorkList(workList.filter((work) => work.id !== index));
  }

  function handleUpdateWork(index, field, value) {
    setWorkList(
      workList.map((work) => {
        if (work.id === index) {
          return { ...work, [field]: value };
        }
        return work;
      }),
    );
  }

  return (
    <div className="main-container">
      <InputSidebar
        firstName={firstName}
        lastName={lastName}
        profession={profession}
        phoneNumber={phoneNumber}
        email={email}
        educationList={educationList}
        skillsList={skillsList}
        workList={workList}
        onFirstNameChange={setFirstName}
        onLastNameChange={setLastName}
        onProfessionChange={setProfession}
        onPhoneNumberChange={setPhoneNumber}
        onEmailChange={setEmail}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onUpdateEducation={handleUpdateEducation}
        onAddSkill={handleAddSkill}
        onDeleteSkill={handleDeleteSkill}
        onUpdateSkill={handleUpdateSkill}
        onAddWork={handleAddWork}
        onDeleteWork={handleDeleteWork}
        onUpdateWork={handleUpdateWork}
      ></InputSidebar>
      <MainViewer
        firstName={firstName}
        lastName={lastName}
        profession={profession}
        phoneNumber={phoneNumber}
        email={email}
        educationList={educationList}
        skillsList={skillsList}
        workList={workList}
      ></MainViewer>
    </div>
  );
}
