export const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Craftturf",
    period: "May. 2022 - Present",
    link: "https://craftturf.com/",
    experiences: [
      "Played a pivotal role as a senior frontend engineer in the development of Berry Health, an exceptional telemedicine application.",
      "Led the successful migration of the internal frontend framework, boosting development efficiency and speed.",
      "Transform product design into engaging web applications, ensuring seamless user experiences.",
      "Collaborate on architectural designs, optimizing performance, scalability, and maintainability.",
      "Understand stakeholders' needs, assess technical requirements, and align development efforts accordingly.",
      "Manage diverse frontend tasks, including UI development, performance optimization, code review and maintenance.",
    ],
  },
  {
    role: "Fullstack Engineer",
    company: "Wedevelopers",
    period: "Jul. 2021 - May. 2022",
    link: "https://wedevelopers.dev/",
    experiences: [
      "Successfully integrated automation into the organization's workflow, resulting in significant improvements in turnover and efficiency.",
      "Led the development of OneConverse, a user-friendly web app for seamless access to translation and interpretation services, as the Lead Software Engineer.",
      "Train and mentor junior software engineers, fostering their growth and skills development.",
      "Evaluate organization needs and deliver optimal technical solutions to meet business objectives.",
      "Conduct code reviews and engage in pair programming with fellow developers to ensure code quality.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Beam Agency",
    period: "Dec. 2018 - June 2021",
    link: "#",
    experiences: [
      "Conduct in-depth research on emerging technologies to meet specific technical requirements and drive innovation.",
      "Identify and implement performance enhancements to optimize the speed and efficiency of our web solutions.",
      "Write scalable and maintainable code for a variety of high-performing applications, ensuring optimal performance and reliability.",
      "Collaborate in code reviews and actively engage in pair programming to enhance code quality and team collaboration.",
    ],
  },
];

export type ExperienceType = {
  role: string;
  company: string;
  period: string;
  link: string;
  experiences: string[];
}[];
