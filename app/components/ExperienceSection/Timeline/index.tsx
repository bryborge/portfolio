import { experienceData } from "@/lib/resume";
import Role from "./Role";

import type { JSX } from "react";

/**
 * Renders a timeline of experiences including company names, roles, technologies, and dates.
 *
 * @return {JSX.Element} The JSX element representing the timeline.
 */
const Timeline = (): JSX.Element => {
  return (
    <ol className="pb-0 md:pb-8">
      { experienceData.map((experience) => (
        <li key={experience.name} className="mb-12">
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

              { experience.roles?.map((role, key) => (
                <Role role={role} key={key} />
              ))}

              <ul className="mt-2 flex flex-wrap">
              { experience.technologies?.map((technology) => (
                <li className="mr-1.5 mt-2" key={technology}>
                  <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300">
                    { technology }
                  </div>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
