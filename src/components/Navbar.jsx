import { links, profile } from "../data";

const Navbar = () => (
  <nav className="wrap flex flex-wrap items-baseline justify-between gap-y-2 py-6 border-b border-rule">
    <a href="#top" className="wide text-lg font-semibold">{profile.name}</a>
    <div className="flex gap-x-6 text-base">
      {links.map(({ href, text }) => (
        <a key={href} href={href} className="text-slate hover:text-ink">{text}</a>
      ))}
    </div>
  </nav>
);

export default Navbar;
