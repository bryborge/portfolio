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
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            { metadata.title?.toString() }
          </h1>
        </Link>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          { metadata.other?.subTitle?.toString() }
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          { metadata.description?.toString() }
        </p>

        <div className="mt-8">
          <Socials />
        </div>
      </div>
    </header>
  );
}

export default Header;
