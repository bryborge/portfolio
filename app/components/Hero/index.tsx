import Link from "next/link";
import Image from 'next/image';
import portrait from "./bryan_portrait_web_blob.png";

/**
 * Renders the header component with links to social media profiles.
 *
 * @return {JSX.Element} The header component.
 */
const Header = (): JSX.Element => {
  return (
    <section className="hero flex flex-col sm:flex-row-reverse">
      <div className="mx-8 mb-8 lg:mb-20 max-w-full">
        <Image
          src={portrait}
          alt="me"
        />
      </div>
      <div className="grow"></div>
      <div className="content-center text-center sm:text-left">
        <Link href="/">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-normal lg:whitespace-nowrap font-bold tracking-tight text-slate-800">
            Bryan Borgeson
          </h1>
        </Link>
        <section className="mt-3 h-12 overflow-hidden">
          <div className="first" style={{ "animation": "text-animation 10s infinite" }}>
            <h2 className="mt-2 text-3xl whitespace-nowrap font-medium tracking-tight text-indigo-600">
              Engineering Manager
            </h2>
          </div>
          <div className="second">
            <h2 className="mt-2 text-3xl whitespace-nowrap font-medium tracking-tight text-amber-600">
              Software Engineer
            </h2>
          </div>
          <div className="third">
            <h2 className="mt-2 text-3xl whitespace-nowrap font-medium tracking-tight text-rose-600">
              Cybersecurity
            </h2>
          </div>
        </section>
        <p className="mt-4 md:max-w-md lg:max-w-lg text-md sm:text-lg md:text-xl font-semibold text-slate-600">
          Driving Technical Excellence through collaborative problem-solving and authentic leadership.
        </p>

        {/* TODO: Replace socials w/ "Let's Connect" and "View Work" CTA buttons */}
        {/* <button className="rounded-full bg-indigo-300 px-8 py-4 font-bold leading-5 text-indigo-950 hover:bg-indigo-400">Let&#39;s Connect</button> */}
      </div>
    </section>
  );
}

export default Header;
