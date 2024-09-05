import CallToAction from "./CallToAction";
import Farewell from "./Farewell";
import PortfolioLinks from "./PortfolioLinks";
import BlogLinks from "./BlogLinks";
import ContractMe from "./ContactMe";

/**
 * Renders the Footer component.
 *
 * @return {JSX.Element} The rendered Footer component.
 */
const Footer = (): JSX.Element => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <footer className="bg-slate-800 text-center text-surface/75 lg:text-left">
        <CallToAction />

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Farewell />
            <PortfolioLinks />
            <BlogLinks />
            <ContractMe />
          </div>
        </div>

        <div className="bg-black/5 p-6 text-center">
          <span>© 2024 Copyright: </span>
          <a className="font-semibold" href="https://bryborge.com/">
            Bryan Borgeson
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
