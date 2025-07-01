export const featured = [
  {
    id: "project-2",
    name: "Findexterous",
    description:
      "Findexterous is a versatile financial management app offering a wide array of features, including expense monitoring, collaborative finance management, invoicing, payroll management, bookkeeping, and more, for streamlined financial operations.",
    technologies: ["NextJs", "RTK", "NodeJS", "MongoDB"],
    image: "/findexterous.webp",
    link: "https://findexterous-git-main-tosin-ojo.vercel.app/",
    source: "",
  },
  {
    id: "project-1",
    name: "OurBerry",
    description:
      "OurBerry is a comprehensive healthcare app offering online private medical consultations, prescription medication, and nationwide delivery services across Ghana.",
    technologies: ["Server React", "RTK", "Material UI", "GraphQL"],
    image: "/berry-health.webp",
    link: "https://ourberry.com/",
    source: "",
  },
  {
    id: "project-3",
    name: "OneConverse",
    description:
      "OneConverse empowers users with multi-role participation in translation services through a seamless workflow. Key features include word count, invoice generation, secure authentication, and global connectivity.",
    technologies: ["ReactJS", "Redux", "NodeJS", "Express", "MongoDB"],
    image: "/oneconverse.webp",
    link: "https://festive-johnson-bacbb6.netlify.app/",
    source: "",
  },
  {
    id: "project-4",
    name: "Agrochainer",
    description:
      "Agrochainer is a user-friendly web platform that offers convenient purchasing and payment options for a diverse selection of agro-allied produce",
    technologies: ["ReactJS", "Redux", "Firebase", "Paystack"],
    image: "/agrochainer.webp",
    link: "https://agrochainer.firebaseapp.com/",
    source: "https://github.com/Tosin-Ojo/Agrochainer",
  },
  {
    id: "project-5",
    name: "GitMirror",
    description:
      "GitMirror is a pixel-perfect clone of the GitHub profile page. Experience a flawless display of requested user profiles with simulated links and events.",
    technologies: ["HTML5", "CSS3", "JavaScript(ES6)", "GraphQL"],
    image: "/github.webp",
    link: "https://githubbc.firebaseapp.com/",
    source: "https://github.com/Tosin-Ojo/GitHub-User-API",
  },
];

export const noteworthy = [
  {
    name: "ChatConnect",
    description:
      "An app for real-time messaging where multiple users can engage in seamless communication within a unique room.",
    technologies: ["NodeJS", "ExpressJS", "Mustache", "Socket.io"],
    link: "",
    source: "https://github.com/Tosin-Ojo/node-v3-chat-app",
  },
  {
    name: "CodeCompendium",
    description:
      "A project that curates and presents a comprehensive collection of algorithms and solutions in a visually appealing UI.",
    technologies: ["Typescript", "ReactJS", "CSS3"],
    link: "https://book-of-code-three.vercel.app/",
    source: "https://github.com/Tosin-Ojo/book-of-code",
  },
  {
    name: "PacRevive",
    description:
      "Relive the 80s nostalgia with PacRevive! Experience the classic game of Pacman, bringing back cherished memories in all their pixelated glory.",
    technologies: ["HTML5", "CSS3", "JavaScript(ES6)"],
    link: "https://trusting-neumann-c8be82.netlify.app/",
    source: "https://github.com/Tosin-Ojo/pacman",
  },
  {
    name: "BeatMaster",
    description:
      "An app with a virtual drum set featuring distinct notes and functions. Experience the thrill as the keys respond to your keystrokes, bringing the rhythm to life.",
    technologies: ["NextJS", "TailwindCSS"],
    link: "https://drum-machine-pink.vercel.app/",
    source: "https://github.com/Tosin-Ojo/drum-machine",
  },
  {
    name: "Emesher",
    description:
      "A dynamic networking app that connects users for a wide range of services and products. Post needs, products, and engage with other users through interactive features like bidding and more.",
    technologies: ["ReactJS", "Firestore", "Firebase Function"],
    link: "https://emesher.web.app/",
    source: "https://github.com/Tosin-Ojo/emesher",
  },
  {
    name: "PrecisionCalc",
    description:
      "A keypad-operated calculator designed for accurate basic calculations with utmost precision. Perform calculations effortlessly with confidence and reliability.",
    technologies: ["NextJS", "TailwindCSS"],
    link: "https://calculator-theta-dun.vercel.app/",
    source: "https://github.com/Tosin-Ojo/calculator",
  },
];

export const more = [
  {
    name: "DiscuZone",
    description:
      "A versatile forum where users can post and engage in discussions. With role-based permissions, users can create, read, update, and delete posts, fostering an interactive and engaging community.",
    technologies: ["NodeJS", "ExpressJS", "handlebars", "MongoDB"],
    link: "",
    source: "https://github.com/Tosin-Ojo/CMS",
  },
  {
    name: "ForecasterX",
    description:
      "A weather prediction app that utilizes geolocation and weather prediction APIs to provide accurate weather forecasts for any desired location. Stay informed about the weather wherever you go.",
    technologies: ["NodeJS", "ExpressJS", "Handlebars"],
    link: "",
    source: "https://github.com/Tosin-Ojo/node3-weather-website",
  },
  {
    name: "ArtiHub",
    description:
      "An all-in-one app for writing, uploading, updating, and deleting various articles. Seamlessly manage your content and share your ideas with the world.",
    technologies: ["NodeJS", "ExpressJS", "ejs", "MongoDB"],
    link: "",
    source: "https://github.com/Tosin-Ojo/Blog-App",
  },
  {
    name: "TalentoSphere",
    description:
      "A personal website designed to exhibit the impressive works and skills of Tosin. Explore a portfolio that captures the essence of creativity and expertise.",
    technologies: ["NextJS", "NodeJS", "Express"],
    link: "https://www.tosinojo.com/",
    source: "https://github.com/Tosin-Ojo/portfolio-2.0",
  },
  {
    name: "Task Manager API",
    description:
      "A comprehensive collection of APIs that enables users to log in, create tasks, and efficiently manage their task lists. Simplify your workflow and stay organized with ease.",
    technologies: ["NodeJS", "ExpressJs", "MongoDB", "Jest"],
    link: "",
    source: "https://github.com/Tosin-Ojo/task-manager-api",
  },
];

export type FeaturedType = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  source: string;
}[];

export type NoteworthyType = {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  source: string;
}[];

export type MoreType = {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  source: string;
}[];
