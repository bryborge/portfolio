/**
 * Renders a timeline of experiences including company names, roles, technologies, and dates.
 *
 * @return {JSX.Element} The JSX element representing the timeline.
 */
const Timeline = (): JSX.Element => {
  // TODO: Get data from API
  const experience = [
    {
      name: "LegitScript, LLC",
      href: "https://www.legitscript.com/",
      startDate: "2020",
      endDate: "2024",
      roles: [
        {
          title: "Software Engineering Manager",
          description: "Spearheaded cross-functional initiatives with executives, product, architecture, and engineers to drive SOC-2 compliance and drive innovative customer experiences through new feature development.",
        },
        {
          title: "Senior Software Engineer, Lead",
          description: "Assembled and led a high-performing team of 5 engineers with diverse skill sets to execute a complex data migration project from core applications to a Databricks-powered data warehouse.",
        },
        {
          title: "Software Engineer II",
          description: "Dismantled silos across the Platform Monitoring business vertical by establishing open communication channels and fostering a culture of collaboration that promoted shared responsibility and best practices.",
        },
        {
          title: "Software Engineer I",
          description: "Designed and implemented scalable CloudFormation templates that provisioned and managed AWS cloud resources for a High Availability, auto-scaling web scraper service orchestrated by Kubernetes across development, staging, and production environments.",
        },
      ],
      technologies: ["Typescript", "React", "Node.js", "Ruby on Rails", "Docker", "Kubernetes", "AWS", "Python", "Databricks", "Terraform", "Puppet", "Ansible", "Grafana"],
    },
    {
      name: "Lumen Learning",
      href: "https://www.lumenlearning.com/",
      startDate: "2015",
      endDate: "2019",
      roles: [
        {
          title: "Software Engineer",
          description: "Overhauled the frontend design and accessibility features on the student quiz platform - built with a Ruby on Rails API backend and React SPA frontend.",
        },
        {
          title: "Jr. Software Engineer",
          description: "Collaborated as a key member of a 4-person team to drive the development of Waymaker, a personalized learning tool that delivered MVP success through innovative features like study plans, pre-tests, self-checks, and individualized coaching for students.",
        },
      ],
      technologies: ["React", "Ruby on Rails", "PHP", "Wordpress", "Node.js"],
    }
  ]

  return (
    <ol className="pb-0 md:pb-8">
      {/* Experience */}
      { experience.map((experience) => (
        <li
          key={experience.name}
          className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              { experience.startDate } — { experience.endDate }
            </header>
            <div className="z-10 sm:col-span-6">
              <h4 className="font-medium leading-snug text-slate-200">
                <a href={experience.href} target="_blank">
                  { experience.name }
                </a>
              </h4>

              {/* Roles */}
              { experience.roles?.map((role) => (
                <div key={role.title}>
                  <h5 className="text-slate-300">
                    { role.title }
                  </h5>
                  <p className="mt-2 mb-6 text-sm leading-normal">
                    { role.description }
                  </p>
                </div>
              ))}

              {/* Technologies */}
              <ul className="mt-2 flex flex-wrap">
              { experience.technologies?.map((technology) => (
                <li className="mr-1.5 mt-2" key={technology}>
                  <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300">
                    { technology }
                  </div>
                </li>
              )) }
              </ul>

            </div>
          </div>
        </li>
      )) }
    </ol>
  );
}

export default Timeline;
