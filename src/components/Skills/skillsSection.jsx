export default function Skills({ skill, onUpdateSkill, onDeleteSkill }) {
  return (
    <>
      <label>
        Skills:
        <input
          type="text"
          value={skill.skills}
          onChange={(e) => onUpdateSkill(skill.id, "skills", e.target.value)}
        />
      </label>
      <button
        className="deleteBtn"
        type="button"
        onClick={() => onDeleteSkill(skill.id)}
      >
        Delete
      </button>
    </>
  );
}
