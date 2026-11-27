import { projects } from "../data";

const Projects = () => (
  <section id="projects" className="wrap py-24">
    <h2 className="wide text-2xl font-semibold">Side projects</h2>
    <div className="mt-10 grid gap-12 md:grid-cols-2">
      {projects.map((p) => (
        <article key={p.title} className="max-w-measure border-t-2 border-ink pt-5">
          <h3 className="wide text-xl font-semibold">{p.title}</h3>
          <p className="mt-3">{p.text}</p>
          <a className="link mt-4 inline-block" href={p.url}>{p.linkText}</a>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
