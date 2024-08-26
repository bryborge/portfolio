/**
 * Renders a link to view the full résumé.
 *
 * @return {JSX.Element} The link element to view the résumé.
 */
const ResumeLink = (): JSX.Element => {
  // TODO: Variablize resume link url
  return (
    <a
      href="https://drive.google.com/file/d/18ufroP5j3ALmdSiPGALKevLjIpwvo7kA/view"
      target="_blank"
      className="rounded-full bg-indigo-400 px-4 py-2 font-heavy leading-5 text-indigo-950 hover:bg-indigo-300">
      View full résumé
    </a>
  )
}

export default ResumeLink;
