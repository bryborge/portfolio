import { metadata } from "@/app/layout";

/**
 * Renders a link to view the full résumé.
 *
 * @return {JSX.Element} The link element to view the résumé.
 */
const ResumeLink = (): JSX.Element => {
  return (
    <a
      href={ metadata.other?.viewResumeLink?.toString() }
      target="_blank"
      className="rounded-full bg-indigo-400 px-4 py-2 font-heavy leading-5 text-indigo-950 hover:bg-indigo-300">
      View full résumé
    </a>
  )
}

export default ResumeLink;
