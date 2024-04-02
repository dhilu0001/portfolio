const SkillsProgress = ({ title, progress }) => {
  return (
    <article>
      <h4 className="mt-6 font-bold">{title}</h4>
      <progress className="progress progress-accent w-36" value={progress} max="100"></progress>
    </article>
  );
};

export default SkillsProgress;
