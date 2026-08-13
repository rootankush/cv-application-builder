export default function About({
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
}) {
  function handleFirstNameChange(e) {
    onFirstNameChange(e.target.value);
  }

  function handleLastNameChange(e) {
    onLastNameChange(e.target.value);
  }

  function handleProfessionChange(e) {
    onProfessionChange(e.target.value);
  }

  function handleEmailChange(e) {
    onEmailChange(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    onPhoneNumberChange(e.target.value);
  }

  return (
    <form className="about-details-form">
      <label>
        First Name:
        <input
          value={firstName}
          onChange={handleFirstNameChange}
          type="text"
          className="firstNameInput"
        ></input>
      </label>
      <br />
      <label>
        Last Name:
        <input
          value={lastName}
          onChange={handleLastNameChange}
          type="text"
          className="lastNameInput"
        ></input>
      </label>
      <br />
      <label>
        Profession:
        <input
          type="text"
          value={profession}
          onChange={handleProfessionChange}
          className="professionInput"
          placeholder="Full Stack Developer"
        ></input>
      </label>
      <br />
      <label>
        Email:
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          className="emailInput"
          placeholder="example@gmail.com"
        ></input>
      </label>
      <br />
      <label>
        Phone Number:
        <input
          onChange={handlePhoneNumberChange}
          value={phoneNumber}
          className="phoneNumberInput"
          alt="phoneNumber"
        ></input>
      </label>
    </form>
  );
}
