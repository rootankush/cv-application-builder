export default function Skills({ skills, onSkillsChange }) {
  function handleSkillsChange(e) {
    onSkillsChange(e.target.value);
  }
  return (
    <form className="skills-form">
      <label>
        Skills:
        <input type="text" value={skills} onChange={handleSkillsChange} />
      </label>
    </form>
  );
}
