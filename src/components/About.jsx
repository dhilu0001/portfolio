import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.jpg";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-60 mt-8 leading-loose">
            Fuelled by code and coffee, I embark on my journey of turning ideas
            into reality. With each line of code, I'm driven by the desire to
            create meaningful and impactful solutions. Whether it's a complex
            algorithm or a sleek user interface, I find solace in the rhythm of
            keystrokes and the aroma of freshly brewed coffee.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
