import { intro, profile } from "../data";

const Intro = () => (
  <header id="top" className="wrap pt-16 pb-20 md:pt-24 md:pb-28">
    <h1 className="wide max-w-5xl text-[2.4rem] leading-[1.08] md:text-[4.1rem] font-semibold tracking-tight">
      {intro.headline}
    </h1>
    <div className="mt-10 flex flex-col-reverse gap-8 sm:flex-row sm:items-end">
      <div className="max-w-measure">
        <p className="text-slate">{intro.lede}</p>
        <p className="mt-2 text-slate">Based in {profile.location}, working with teams anywhere.</p>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <a className="link" href={`mailto:${profile.email}`}>Email me</a>
          <a className="link" href={profile.linkedin}>LinkedIn</a>
          <a className="link" href={profile.github}>GitHub</a>
          {profile.resume && <a className="link" href={profile.resume}>Download résumé</a>}
        </p>
      </div>
      {profile.photo && (
        <img
          src={profile.photo}
          alt={`${profile.name}`}
          className="h-44 w-36 sm:h-52 sm:w-44 object-cover border-b-[6px] border-cobalt"
        />
      )}
    </div>
  </header>
);

export default Intro;
