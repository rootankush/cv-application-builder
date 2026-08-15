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
  aboutCollage,
  skills,
  companyName,
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
      <hr />
      <article className="informationSection">
        <section className="contactField">
          <div className="contactSvg">
            <img src="src/assets/svg/phone.svg" alt="" />
            {phoneNumber}
          </div>
          <div className="contactSvg">
            <img src="src/assets/svg/email.svg" alt="" />
            {email}
          </div>
        </section>
        <hr />
        <h3>EDUCATION</h3>
        <hr />
        <section className="educationField">
          <section className="left">
            <h4>
              {startDate}-{endDate}
            </h4>
            <h4 className="collageName">{collageName}</h4>
          </section>
          <section className="right">
            <h4 className="degreeName">{degree}</h4>
            <p className="aboutCollage">{aboutCollage}</p>
          </section>
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
        <h3>EXPERIENCE</h3>
        <hr />
        <section className="expreienceField">
          <section className="left">
            <h4>
              {jobStartDate}-{jobEndDate}
            </h4>
            <h4 className="companyName">{companyName}</h4>
          </section>
          <section className="right">
            <h4>{jobTitle}</h4>
            <p>{jobResponsibility}</p>
          </section>
        </section>
        <h3>SKILLS</h3>
        <section className="skillsField">
          <hr />
          <h4>{skills}</h4>
        </section>
      </article>
    </main>
  );
}
