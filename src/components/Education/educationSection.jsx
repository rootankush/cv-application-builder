export default function Education() {
  return (
    <form className="education-form">
      <label>
        Collage Name:
        <input
          type="text"
          className="collageName"
          placeholder="State University"
        ></input>
      </label>
      <br />
      <label>
        Degree:
        <input
          type="text"
          className="degreeName"
          placeholder="Bachelor of Science in Computer Science"
        ></input>
      </label>
      <br />
      <label>
        Start Date:
        <input className="startDate" type="date"></input>
      </label>
      <label>
        End Date:
        <input className="endDate" type="date"></input>
      </label>
      <br />
      <label>
        Location:
        <input
          className="locationName"
          type="text"
          placeholder="Springfield, IL"
        />
      </label>
    </form>
  );
}
