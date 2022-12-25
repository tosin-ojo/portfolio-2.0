export const jobs = ["Teqporte", "Novatia", "Wedevelopers", "Beam Agency"];

export const experiences = [
  {
    role: "Lead Software Engineer",
    company: "Teqporte",
    period: "Jun. 2021 - Present",
    link: "https://teqportecloud.com/",
    experiences: [
      "Build high performant and visible web apps and make significant contributions to architectural decisions.",
      "Manage projects and ensure effective communications among team members.",
      "Train and mentor various software engineering students, presenting and guiding them through practical projects.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Novatia",
    period: "Jun. 2021 - Present",
    link: "https://www.novatiatranslations.com.ng/",
    experiences: [
      "Write scalable, performant, and maintainable codes using modern technologies in line with the best practices.",
      "Collaborate and communicate with a multi-disciplinary team of stakeholders, DevOps, engineers, and designers to advance the organization’s goals.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Wedevelopers",
    period: "Jul. 2021 - Present",
    link: "https://wedevelopers.dev/",
    experiences: [
      "Engage team members and stakeholders to arrive at the best architectural decisions.",
      "Write maintainable, scalable, and clean code, create and improve features, and enhance performance.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Beam Agency",
    period: "Dec. 2018 - June 2021",
    link: "#",
    experiences: [
      "Effectively communicated with stakeholders and business minds to make the best architectural decisions and create needed features.",
      "Wrote scalable and maintainable codes for various high-performing apps.",
    ],
  },
];

export type JobsType = string[];

export type ExperienceType = {
  role: string;
  company: string;
  period: string;
  link: string;
  experiences: string[];
}[];
