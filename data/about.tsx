export const image = "/Tosin.webp";

export const aboutInfo = {
  paragraghs: {
    introduction: `Introducing Tosin, a Frontend Engineer with a zest for innovation and a touch of backend expertise. With diverse industry experience spanning health, finance, and communication, I thrives on collaborating with teams, shaping architectural designs, and understanding stakeholders needs.`,
    approach: `Bit by bit and step by step, I sees the big picture come together. Embracing a fun and dynamic approach, I learn, listen, and provide solutions that resonate with users. Balancing technical prowess with a keen understanding of user experience, I crafts seamless digital journeys that captivate and inspire.`,
    expertise: `With an unwavering commitment to learning and growth, I thrives on challenges and embraces each project with enthusiasm. Combining technical expertise with a knack for empathetic design, I create digital solutions that empower and simplify.`,
  },
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
      name: "Material UI",
      icon: "materialUi",
    },
    {
      name: "TailwindCSS",
      icon: "tailwind",
    },
    {
      name: "GraphQL",
      icon: "graphQl",
    },
    {
      name: "RTK",
      icon: "rtk",
    },
    {
      name: "Firebase",
      icon: "firebase",
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
  ],
};

export type AboutInfoType = {
  paragraghs: { [key: string]: string };
  technologies: {
    name: string;
    icon: string;
  }[];
};
