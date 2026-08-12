export default function About() {
  const inputLabel = [
    "First Name",
    "Last Name",
    "Profession",
    "Email",
    "Phone Number",
  ];

  return (
    <form className="about-details-form">
      <label>
        First Name:
        <input type="text" className="firstName"></input>
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" className="lastName"></input>
      </label>
      <br />
      <label>
        Profession:
        <input
          type="text"
          className="profession"
          placeholder="Full Stack Developer"
        ></input>
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          className="email"
          placeholder="example@gmail.com"
        ></input>
      </label>
      <br />
      <label>
        Phone Number:
        <input className="phoneNumber" alt="phoneNumber"></input>
      </label>
    </form>
  );
}
