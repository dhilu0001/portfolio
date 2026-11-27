import { eras } from "../data";
import ScopeBar from "./ScopeBar";

const Timeline = () => (
  <section id="timeline" className="wrap pb-24" aria-labelledby="timeline-h">
    <h2 id="timeline-h" className="wide text-2xl font-semibold mb-4">How I got here</h2>
    <ol>
      {eras.map((e) => (
        <li key={e.year} className="grid md:grid-cols-[minmax(0,15rem)_1fr] gap-x-12 gap-y-3 border-t border-rule py-12">
          <p className="year text-[3.4rem] md:text-[5.2rem] text-ink" aria-hidden="true">{e.year}</p>
          <div className="max-w-measure">
            <h3 className="wide text-2xl font-semibold leading-snug">
              <span className="sr-only">{e.year}: </span>{e.title}
            </h3>
            <p className="text-base text-slate">{e.where}</p>
            <p className="mt-4">{e.story}</p>
            <p className="mt-3 text-base text-slate">{e.stack}</p>
            <ScopeBar value={e.scope} label={e.scopeLabel} />
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Timeline;
