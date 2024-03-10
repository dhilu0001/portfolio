import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-60 mt-8 leading-loose">
            Emmet Abbreviation Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Id, ducimus? Animi reiciendis rerum quibusdam
            error aut. Aut nulla odit autem suscipit, nobis perspiciatis
            repellendus, nihil molestiae esse consequuntur vitae quos.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
