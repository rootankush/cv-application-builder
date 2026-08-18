import emailIcon from "../../assets/svg/email.svg";
import phoneIcon from "../../assets/svg/phone.svg";
import "./main-viewer.css";

export default function MainViewer({
  firstName,
  lastName,
  profession,
  email,
  phoneNumber,
  educationList,
  skillsList,
  workList,
}) {
  return (
    <main className="resumeReviewer">
      <header>
        <h1 className="nameField">
          {firstName} {lastName}
        </h1>
        <h2 className="professionField">{profession}</h2>
      </header>
      <hr />
      <article className="informationSection">
        <section className="contactField">
          <div className="contactSvg">
            <img src={phoneIcon} alt="" />
            {phoneNumber}
          </div>
          <div className="contactSvg">
            <img src={emailIcon} alt="" />
            {email}
          </div>
        </section>
        <hr />
        <h3>EDUCATION</h3>
        <hr />
        {educationList.map((edu) => (
          <section className="educationField" key={edu.id}>
            <section className="left">
              <h4>
                {edu.startDate}-{edu.endDate}
              </h4>
              <h4 className="collageName">{edu.collageName}</h4>
            </section>
            <section className="right">
              <h4 className="degreeName">{edu.degree}</h4>
              <p className="aboutCollage">{edu.aboutCollage}</p>
            </section>
          </section>
        ))}
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
        <h3>EXPERIENCE</h3>
        <hr />
        {workList.map((work) => (
          <section className="expreienceField" key={work.id}>
            <section className="left">
              <h4>
                {work.jobStartDate}-{work.jobEndDate}
              </h4>
              <h4 className="companyName">{work.companyName}</h4>
            </section>
            <section className="right">
              <h4>{work.jobTitle}</h4>
              <p>{work.jobResponsibility}</p>
            </section>
          </section>
        ))}
        <h3>SKILLS</h3>
        <hr />
        <section className="skillsField">
          {skillsList.map((skill) => (
            <span key={skill.id} className="skillTag">
              {skill.skills}
            </span>
          ))}
        </section>
      </article>
    </main>
  );
}
