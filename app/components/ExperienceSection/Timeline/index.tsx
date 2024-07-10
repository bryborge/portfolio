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
          description: "Work cross-functionally with executives, product, architecture, and engineers to define and prioritize initiatives critical to maintaining SOC-2 compliance while developing new features to delight customers.",
        },
        {
          title: "Senior Software Engineer, Lead",
          description: "Build a team of 5 engineers at various skill levels to execute on migrating data from core applications and services down to a Databricks-powered data warehouse.",
        },
        {
          title: "Software Engineer II",
          description: "Dismantle silos and foster healthy communication between Product Management and Engineering along the Platform Monitoring business vertical.",
        },
        {
          title: "Software Engineer I",
          description: "Write infrastructure code to provision and manage AWS cloud resources for a Highly Available, auto-scaling web scraper service orchestrated by Kubernetes across 3 environments (development, staging, production).",
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
          description: "Overhaul the frontend design and accessibility features on the student quiz platform, built with a Ruby on Rails API backend and React SPA frontend. Build the MVP for project Waymaker — a personalized learning tool aimed to deliver personalized study plans, pre-tests, self-checks, and coaching to students.",
        },
        {
          title: "Jr. Software Engineer",
          description: "Lead the collaboration effort with the Open-source Pressbooks community maintainers, meeting regularly to discuss the project's trajectory, submitting feature code, and bug fixes. Mentor and help over 15 code-school graduate interns seeking software development industry-experience.",
        },
      ],
      technologies: ["React", "Ruby on Rails", "PHP", "Wordpress", "Node.js"],
    }
  ]

  return (
    <ol>
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
