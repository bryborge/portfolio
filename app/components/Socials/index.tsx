import FacebookIcon from "../Icons/FacebookIcon";
import GitHubIcon from "../Icons/GitHubIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import XIcon from "../Icons/XIcon";

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
    {
      name: "X",
      href: "https://x.com/bryborge",
      icon: <XIcon />
    },
    {
      name: "Instagram",
      href: "https://instagram.com/bryborge",
      icon: <InstagramIcon />
    },
    {
      name: "Facebook",
      href: "https://facebook.com/bryborge",
      icon: <FacebookIcon />
    },
  ]

  return (
    <ul
      className="ml-1 flex items-center"
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
