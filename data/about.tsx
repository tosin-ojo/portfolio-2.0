export const image = "/Tosin.webp";

export const aboutInfo = {
  intro: `Hello! My name is <a href="#start">Tosin</a>, and I enjoy creating fascinating things that reside on the internet. I displayed my first 'Hello World!' on Chrome years back, then embarked on a determined and disciplined self-education to become a software engineer with versatile knowledge on both front-end and back-end engineering.`,
  experience:
    'Over the years, I have built <a href="#projects">self-pleasing and client-satisfying projects</a>, and I am also privileged to work with creative teams to build, deploy and maintain fascinating web solutions.',
  achievement:
    'Recently, I rendered a full-stack service to an organization to build a <a href="https://www.oneconverse.com" target="_blank">world-class solution</a>, hence, providing a global reach.',
  technologies: [
    {
      name: "JavaScript",
      icon: "javascript",
    },
    {
      name: "TypeScript",
      icon: "typescript",
    },
    {
      name: "ReactJS",
      icon: "reactJs",
    },
    {
      name: "NextJS",
      icon: "next",
    },
    {
      name: "TailwindCSS",
      icon: "tailwind",
    },
    {
      name: "NodeJS",
      icon: "node",
    },
    {
      name: "ExpressJS",
      icon: "express",
    },
    {
      name: "MongoDB",
      icon: "mongoDB",
    },
    {
      name: "Firebase",
      icon: "firebase",
    },
  ],
};

export type AboutInfoType = {
  intro: string;
  experience: string;
  achievement: string;
  technologies: {
    name: string;
    icon: string;
  }[];
};
