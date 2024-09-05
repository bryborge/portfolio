import { buildResumeViewUrl } from "@/lib/resume";

/**
 * Renders a link to view the full résumé.
 *
 * @return {JSX.Element} The link element to view the résumé.
 */
const ResumeLink = (): JSX.Element => {
  const resumeUrl = buildResumeViewUrl();

  return (
    <a
      href={resumeUrl}
      target="_blank"
      className="rounded-full bg-indigo-400 px-6 py-3 font-bold font-heavy leading-5 text-indigo-950 hover:bg-indigo-300">
      View full résumé
    </a>
  )
}

export default ResumeLink;
