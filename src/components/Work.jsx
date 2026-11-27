import { work } from "../data";

const Work = () => (
  <section id="work" className="bg-ink text-mist">
    <div className="wrap py-24">
      <h2 className="wide text-2xl font-semibold">What I'm building now</h2>
      <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-20">
        {work.map((w) => (
          <article key={w.title} className="max-w-measure">
            <h3 className="wide text-4xl font-bold tracking-tight">{w.title}</h3>
            <p className="mt-2 text-lg text-haze">{w.summary}</p>
            <h4 className="wide mt-8 text-base font-semibold">The problem</h4>
            <p className="mt-2 text-[#C9D0CB]">{w.problem}</p>
            <h4 className="wide mt-6 text-base font-semibold">What I built</h4>
            <ul className="mt-2 space-y-3 text-[#C9D0CB] list-disc pl-5">
              {w.built.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <h4 className="wide mt-6 text-base font-semibold">The result</h4>
            <p className="mt-2">{w.result}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
