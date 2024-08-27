import ResumeLink from "./ResumeLink";
import Timeline from "./Timeline";

/**
 * Renders the ExperienceSection component with professional experience information.
 *
 * @return {JSX.Element} The rendered ExperienceSection component.
 */
const ExperienceSection = (): JSX.Element => {
  return (
    <>
      <h3 className="text-xl md:text-2xl font-bold leading-snug text-slate-200 mb-4 uppercase">
        Professional Experience
      </h3>

      <Timeline />

      <div className="flex w-full justify-center">
        <ResumeLink />
      </div>
    </>
  );
};

export default ExperienceSection;
