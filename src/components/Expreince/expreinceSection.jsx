export default function Expreince({ work, onUpdateWork, onDeleteWork }) {
  return (
    <>
      <label>
        Company Name:
        <input
          type="text"
          className="companyName"
          value={work.companyName}
          onChange={(e) => onUpdateWork(work.id, "companyName", e.target.value)}
          placeholder="Amazon"
        />
      </label>
      <label>
        Job Title:
        <input
          value={work.jobTitle}
          onChange={(e) => onUpdateWork(work.id, "jobTitle", e.target.value)}
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
          value={work.jobStartDate}
          onChange={(e) =>
            onUpdateWork(work.id, "jobStartDate", e.target.value)
          }
          type="text"
          placeholder="MM/YYYY"
        />
      </label>
      <label>
        End Date:
        <input
          className="endDate"
          type="text"
          placeholder="MM/YYYY"
          value={work.jobEndDate}
          onChange={(e) => onUpdateWork(work.id, "jobEndDate", e.target.value)}
        />
      </label>
      <br />
      <label>
        Responsibility:
        <br />
        <textarea
          value={work.jobResponsibility}
          onChange={(e) =>
            onUpdateWork(work.id, "jobResponsibility", e.target.value)
          }
          type="text"
          className="jobResponsibility"
          placeholder="Developed and maintained customer-facing web application features."
          required
          minLength="2"
          maxLength="100"
        ></textarea>
      </label>
      <button
        className="deleteBtn"
        type="button"
        onClick={() => onDeleteWork(work.id)}
      >
        Delete
      </button>
    </>
  );
}
