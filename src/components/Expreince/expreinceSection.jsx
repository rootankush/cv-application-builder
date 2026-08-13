export default function Expreince({
  jobTitle,
  onJobTitleChange,
  jobStartDate,
  onJobStartDateChange,
  jobEndDate,
  onJobEndDateChange,
  jobResponsibility,
  onResponsibilityChange,
}) {
  function handleJobTitleChange(e) {
    onJobTitleChange(e.target.value);
  }

  function handleJobStartDateChange(e) {
    onJobStartDateChange(e.target.value);
  }

  function handleJobEndDateChange(e) {
    onJobEndDateChange(e.target.value);
  }

  function handleResponsibilityChange(e) {
    onResponsibilityChange(e.target.value);
  }

  return (
    <form className="expreince-form">
      <label>
        Job Title:
        <input
          value={jobTitle}
          onChange={handleJobTitleChange}
          className="jobTitle"
          type="text"
          placeholder="Software Engineer"
        />
      </label>
      <br />
      <label>
        Start Date:
        <input
          className="startDate"
          value={jobStartDate}
          onChange={handleJobStartDateChange}
          type="date"
        />
      </label>
      <label>
        End Date:
        <input
          className="endDate"
          type="date"
          value={jobEndDate}
          onChange={handleJobEndDateChange}
        />
      </label>
      <br />
      <label>
        Responsibility:
        <br />
        <textarea
          value={jobResponsibility}
          onChange={handleResponsibilityChange}
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
