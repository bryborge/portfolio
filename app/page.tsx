import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";

/**
 * Render the Home page component.
 *
 * @return {JSX.Element} The Home page component.
 */
export default function Home(): JSX.Element {
  return (
    <div className="-mt-16">
      <div className="bg-slate-100 py-12 font-sans md:py-20 lg:py-0">
        <div className="max-w-screen-2xl px-6 md:px-12 lg:px-24 xl:px-36 mx-auto">
          <Hero />
        </div>
      </div>
      <div className="">
        <div className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4 mb-auto">
          <div className="width-full">
            <div className="px-12 py-12 md:py-20 lg:px-24 font-sans">
              <ExperienceSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

