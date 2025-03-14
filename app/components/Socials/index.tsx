import GitHubIcon from "../Icons/GitHubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";

import type { JSX } from "react";

/**
 * Renders a list of social media icons with their respective links.
 *
 * @return {JSX.Element} The JSX element representing the list of social media icons.
 */
const Socials = (): JSX.Element => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/bryborge",
      icon: <GitHubIcon />
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bryborge/",
      icon: <LinkedInIcon />
    },
  ]

  return (
    <ul
      className="flex items-center"
      aria-label="Social links">
        { socialLinks.map(({ name, href, icon }) => (
          <li
            key={name}
            className="mr-3 text-xs shrink-0">
            <a
              href={href}
              target="_blank">
                { icon }
            </a>
          </li>
        )) }
    </ul>
  );
}

export default Socials;
