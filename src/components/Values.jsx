import { values } from "../data";

const Values = () => (
  <section id="about" className="wrap py-24 border-t border-rule" aria-labelledby="values-h">
    <h2 id="values-h" className="wide text-2xl font-semibold">What I'm looking for</h2>
    <div className="mt-10 grid gap-12 md:grid-cols-2 xl:grid-cols-3">
      {values.map((v) => (
        <article key={v.title} className="max-w-measure">
          <h3 className="wide text-xl font-semibold">{v.title}</h3>
          {v.text.map((t) => <p key={t} className="mt-4">{t}</p>)}
        </article>
      ))}
    </div>
  </section>
);

export default Values;
