import resumeDemo from "../../assets/img/resume-demo.png";
import "./main-viewer.css";

export default function MainViewer({
  firstName,
  lastName,
  profession,
  email,
  phoneNumber,
  collageName,
  degree,
  startDate,
  endDate,
  location,
  skills,
  jobTitle,
  jobStartDate,
  jobEndDate,
  jobResponsibility,
}) {
  return (
    <main className="resumeReviewer">
      <header>
        <h1 className="nameField">
          {firstName} {lastName}
        </h1>
        <h2 className="professionField">{profession}</h2>
      </header>
      <article className="informationSection">
        <section className="contactField">
          <h3>Contact</h3>
          <h4>{phoneNumber}</h4>
          <h4>{email}</h4>
        </section>
        <section className="skillsField">
          <h3>Skills</h3>
          <h4>{skills}</h4>
        </section>
        <section className="educationField">
          <h3>Education</h3>
          <h4>{collageName}</h4>
          <h4>
            {startDate} - {endDate}
          </h4>
          <h4>{degree}</h4>
          <h4>{location}</h4>
        </section>
        {/* <section className="profileField">
          <h3>Profile</h3>
          <p>
            Social Media Marketing Specialist, utilizing my 5+ years of
            experience in creating and executing successful social media
            campaigns, developing engaging content, analyzing and reporting on
            campaign performance, and staying up to date with the latest trends
            and best practices in social media marketing. My goal is to increase
            brand awareness, engagement, and conversion rates while delivering
            exceptional results and exceeding goals for the company.
          </p>
        </section> */}
        <section className="expreienceField">
          <h3>Expreience</h3>
          <h4>{jobTitle}</h4>
          <h4>
            {jobStartDate}-{jobEndDate}
          </h4>
          <p>{jobResponsibility}</p>
        </section>
      </article>
    </main>
  );
}
