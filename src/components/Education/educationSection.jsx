export default function Education({
  collageName,
  onCollageNameChange,
  degree,
  onDegreeChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  aboutCollage,
  onAboutCollageChange,
}) {
  function handleCollageNameChange(e) {
    onCollageNameChange(e.target.value);
  }

  function handleDegreeChange(e) {
    onDegreeChange(e.target.value);
  }

  function handleStartDateChange(e) {
    onStartDateChange(e.target.value);
  }

  function handleEndDateChange(e) {
    onEndDateChange(e.target.value);
  }

  function handleAboutCollageChange(e) {
    onAboutCollageChange(e.target.value);
  }

  return (
    <form className="education-form">
      <label>
        Collage Name:
        <input
          value={collageName}
          onChange={handleCollageNameChange}
          type="text"
          className="collageName"
          placeholder="State University"
        ></input>
      </label>
      <br />
      <label>
        Degree:
        <input
          value={degree}
          onChange={handleDegreeChange}
          type="text"
          className="degreeName"
          placeholder="Bachelor of Science in Computer Science"
        ></input>
      </label>
      <br />
      <label>
        Start Date:
        <input
          placeholder="MM/YYYY"
          value={startDate}
          onChange={handleStartDateChange}
          className="startDate"
          type="text"
        ></input>
      </label>
      <label>
        End Date:
        <input
          type="text"
          placeholder="MM/YYYY"
          className="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        ></input>
      </label>
      <br />
      <label>
        About Collage:
        <input
          value={aboutCollage}
          onChange={handleAboutCollageChange}
          className="locationName"
          type="text"
          placeholder=""
        />
      </label>
    </form>
  );
}
