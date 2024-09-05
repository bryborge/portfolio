import Link from "next/link";
import Image from 'next/image';
import portrait from "./bryan_portrait_web_blob.png";

/**
 * Renders the hero component with links to social media profiles.
 *
 * @return {JSX.Element} The hero component.
 */
const Hero = (): JSX.Element => {
  return (
    <section className="hero grid grid-cols-1 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="content-center text-center md:text-left">
          <Link href="/">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl whitespace-normal lg:whitespace-nowrap font-bold tracking-tight text-slate-800">
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

          <div className="mt-8 mb-20">
            <a href="https://www.linkedin.com/in/bryborge/" target="_blank">
              <button className="rounded-full bg-indigo-500 px-6 py-3 font-bold leading-5 text-indigo-50 hover:bg-indigo-700 outline outline-indigo-800 m-1">
                Let&#39;s Connect
              </button>
            </a>
            <a href="https://github.com/bryborge" target="_blank">
              <button className="rounded-full bg-slate-200 px-6 py-3 font-bold leading-5 text-slate-800 hover:bg-slate-300 outline outline-slate-400 m-1">
                View Work
              </button>
            </a>
          </div>
        </div>
        <div className="mx-8 mb-8 lg:mb-20 max-w-full order-first md:order-last">
          <Image
            src={portrait}
            alt="portrait of me"
          />
        </div>
      </div>

      <div className="flex justify-center rotate-90 animate-bounce">
        <svg width="75" height="75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
