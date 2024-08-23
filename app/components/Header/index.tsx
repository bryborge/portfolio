import Link from "next/link";
import { metadata } from "../../layout";
import Socials from "../Socials";

/**
 * Renders the header component with links to social media profiles.
 *
 * @return {JSX.Element} The header component.
 */
const Header = (): JSX.Element => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Link href="/">
          <h1 className="text-6xl font-bold tracking-tight text-slate-200">
            { metadata.title?.toString() }
          </h1>
        </Link>
        <section className="animation mt-3 h-12 overflow-hidden">
          <div className="first" style={{ "animation": "text-animation 12s infinite" }}>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-indigo-300">
              Engineering Manager
            </h2>
          </div>
          <div className="second">
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-amber-300">
              Software Engineer
            </h2>
          </div>
          <div className="third">
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-rose-300">
              Cybersecurity Enthusiast
            </h2>
          </div>
        </section>
        <p className="mt-4 max-w-sm leading-normal">
          { metadata.description?.toString() }
        </p>

        <div className="mt-8 flex flex-row">
          <Socials />
        </div>
      </div>
    </header>
  );
}

export default Header;
