import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";

import type { JSX } from "react";

/**
 * Renders the Home page component.
 *
 * @return {JSX.Element} The Home page component.
 */
const Home = (): JSX.Element => {
  return (
    <div className="lg:-mt-16">
      <div className="bg-slate-100 lg:py-0 font-sans">
        <div className="max-w-screen-2xl px-6 md:px-12 lg:px-24 xl:px-36 mx-auto">
          <Hero />
        </div>
      </div>
      <div className="mx-auto mb-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4">
        <div className="width-full px-12 py-12 md:py-20 lg:px-24 font-sans">
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
