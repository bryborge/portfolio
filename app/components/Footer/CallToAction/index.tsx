import Socials from "../../Socials";

import type { JSX } from "react";

/**
 * Renders the CallToAction component.
 *
 * @return {JSX.Element} The rendered CallToAction component.
 */
const CallToAction = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center lg:justify-between border-b-2 border-neutral-200 p-6 dark:border-white/10">
      <div className="me-12 hidden lg:block">
        <span className="text-md">
          What are you waiting for? <span className="font-bold">Let&#39;s connect!</span>
        </span>
      </div>

      <div className="flex justify-center">
        <Socials />
      </div>
    </div>
  );
}

export default CallToAction;
