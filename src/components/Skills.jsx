import { skillsProgress } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsProgress from "./SkillsProgress"

const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-6 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
        {skillsProgress.map((skill) => {
          return <SkillsProgress key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
