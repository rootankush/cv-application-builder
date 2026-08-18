export default function Education({
  edu,
  onUpdateEducation,
  onDeleteEducation,
}) {
  return (
    <>
      <label>
        Collage Name:
        <input
          value={edu.collageName}
          onChange={(e) =>
            onUpdateEducation(edu.id, "collageName", e.target.value)
          }
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
          value={edu.degree}
          onChange={(e) => onUpdateEducation(edu.id, "degree", e.target.value)}
          className="degreeName"
          placeholder="Bachelor of Science in Computer Science"
        ></input>
      </label>
      <br />
      <label>
        Start Date:
        <input
          placeholder="MM/YYYY"
          value={edu.startDate}
          onChange={(e) =>
            onUpdateEducation(edu.id, "startDate", e.target.value)
          }
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
          value={edu.endDate}
          onChange={(e) => onUpdateEducation(edu.id, "endDate", e.target.value)}
        ></input>
      </label>
      <br />
      <label>
        About Collage:
        <input
          className="locationName"
          type="text"
          value={edu.aboutCollage}
          onChange={(e) =>
            onUpdateEducation(edu.id, "aboutCollage", e.target.value)
          }
          placeholder=""
        />
      </label>
      <button
        className="deleteBtn"
        type="button"
        onClick={() => onDeleteEducation(edu.id)}
      >
        Delete
      </button>
    </>
  );
}
