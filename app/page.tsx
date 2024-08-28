"use client"

import { useState } from "react";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Terminal from "./components/Terminal";
import Toolbar from "./components/Toolbar";

/**
 * Render the Home page component.
 *
 * @return {JSX.Element} The Home page component.
 */
export default function Home(): JSX.Element {
  const [isTerminalDisplayed, setIsTerminalDisplayed] = useState<boolean>(false);

  const handleTerminalToggle = () => {
    setIsTerminalDisplayed((prev) => !prev);
  };

  return (
    <>
      <Toolbar onTerminalAppClick={handleTerminalToggle} />
      <main className="mx-auto min-h-screen font-sans">
        {isTerminalDisplayed && <Terminal onExitCommand={handleTerminalToggle} />}
        <div className={isTerminalDisplayed ? "hidden" : ""}>
          <PageContent />
        </div>
      </main>
    </>
  );
}

const PageContent = (): JSX.Element => {
  return (
    <div className="-mt-16">
      <div className="px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 xl:px-36 max-w-screen-2xl mx-auto">
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
    </div>
  );
}
