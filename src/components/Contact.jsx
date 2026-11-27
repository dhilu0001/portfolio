import { profile } from "../data";

const Contact = () => (
  <footer id="contact" className="wrap border-t border-rule py-20">
    <h2 className="wide max-w-3xl text-3xl md:text-4xl font-semibold leading-tight">
      Have an AI system that needs to work in production, not just in a demo? Let's talk.
    </h2>
    <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
      <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>
      <a className="link" href={profile.linkedin}>LinkedIn</a>
      <a className="link" href={profile.github}>GitHub</a>
    </p>
    <p className="mt-10 text-base text-slate">{profile.location}</p>
  </footer>
);

export default Contact;
