import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import Terminal from "./components/Terminal";
import Toolbar from "./components/Toolbar";

/**
 * Render the Home page component.
 *
 * @return {JSX.Element} The Home page component.
 */
export default function Home(): JSX.Element {
  return (
    <>
      <Toolbar />
      <main className="mx-auto min-h-screen font-sans">
        {/* <Terminal /> */}
        <div className="px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <Hero />
        </div>
        <div className="bg-gradient-to-r from-slate-950 to-slate-800 text-slate-400 antialiased">
          <div className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4 mb-auto">
            <div className="width-full">
              <div className="px-12 py-12 md:py-20 lg:px-24 font-sans">
                <ExperienceSection />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
