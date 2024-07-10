import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Terminal from "./components/Terminal";

/**
 * Render the Home page component.
 *
 * @return {JSX.Element} The Home page component.
 */
export default function Home(): JSX.Element {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 mb-auto">
        <Header />

        <main className="pt-24 lg:w-1/2 lg:py-24 mb-12">
          <Terminal />
          <ExperienceSection />
        </main>
      </div>

      <Footer />
    </div>
  );
}
