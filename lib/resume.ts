const googleResumeVersionHash = "18ufroP5j3ALmdSiPGALKevLjIpwvo7kA";

export const buildResumeDownloadUrl = () => {
  return `https://drive.google.com/uc?export=download&id=${googleResumeVersionHash}`;
}

export const buildResumeViewUrl = () => {
  return `https://drive.google.com/file/d/${googleResumeVersionHash}/view`;
}

export const experienceData = [
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
