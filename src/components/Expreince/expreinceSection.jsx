export default function Expreince() {
  return (
    <form className="expreince-form">
      <label>
        Job Title:
        <input
          className="jobTitle"
          type="text"
          placeholder="Software Engineer"
        />
      </label>
      <br />
      <label>
        Start Date:
        <input className="startDate" type="date" />
      </label>
      <label>
        End Date:
        <input className="endDate" type="date" />
      </label>
      <br />
      <label>
        Location:
        <input className="locationName" type="text" placeholder="Austin, TX" />
      </label>
      <br />
      <label>
        Responsibility:
        <br />
        <textarea
          type="text"
          className="responsibilityText"
          placeholder="Developed and maintained customer-facing web application features."
          required
          minLength="2"
          maxLength="100"
        ></textarea>
      </label>
    </form>
  );
}
