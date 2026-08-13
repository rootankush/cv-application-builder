export default function Education({
  collageName,
  onCollageNameChange,
  degree,
  onDegreeChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  location,
  onLocationChange,
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

  function handleLocationChange(e) {
    onLocationChange(e.target.value);
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
          value={startDate}
          onChange={handleStartDateChange}
          className="startDate"
          type="date"
        ></input>
      </label>
      <label>
        End Date:
        <input
          className="endDate"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        ></input>
      </label>
      <br />
      <label>
        Location:
        <input
          value={location}
          onChange={handleLocationChange}
          className="locationName"
          type="text"
          placeholder="Springfield, IL"
        />
      </label>
    </form>
  );
}
