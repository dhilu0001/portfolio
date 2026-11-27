import { toolkit } from "../data";

// Plain grouped lists: recency says more about depth than a star rating would.
const Toolkit = () => (
  <section id="toolkit" className="wrap py-24 border-t border-rule" aria-labelledby="toolkit-h">
    <h2 id="toolkit-h" className="wide text-2xl font-semibold">Toolkit</h2>
    <dl className="mt-10">
      {toolkit.map((g) => (
        <div key={g.label} className="grid gap-3 border-t-2 border-ink py-5 md:grid-cols-[14rem_1fr] md:gap-8">
          <dt className="wide font-semibold">{g.label}</dt>
          <dd>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {g.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Toolkit;
