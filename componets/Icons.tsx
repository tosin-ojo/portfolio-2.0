import FreeCodeCamp from "../icons/freecodecamp";
import Javascript from "../icons/javascript";
import Typescript from "../icons/typescript";
import Firebase from "../icons/firebase";
import Tailwind from "../icons/tailwind";
import Linkedin from "../icons/linkedin";
import Whatsapp from "../icons/whatsapp";
import Express from "../icons/express";
import MongoDB from "../icons/mongodb";
import Twitter from "../icons/twitter";
import Codepen from "../icons/codepen";
import ReactJs from "../icons/react";
import Github from "../icons/github";
import Next from "../icons/next";
import Node from "../icons/node";
import Mail from "../icons/mail";

export type IconNames =
  | "freeCodeCamp"
  | "javascript"
  | "typescript"
  | "firebase"
  | "tailwind"
  | "linkedin"
  | "whatsapp"
  | "express"
  | "mongoDB"
  | "twitter"
  | "codepen"
  | "reactJs"
  | "github"
  | "next"
  | "node"
  | "mail";

interface Props {
  icon: IconNames;
}

const Icons: React.FC<Props> = ({ icon }) => {
  const components = {
    freeCodeCamp: <FreeCodeCamp />,
    javascript: <Javascript />,
    typescript: <Typescript />,
    firebase: <Firebase />,
    tailwind: <Tailwind />,
    linkedin: <Linkedin />,
    whatsapp: <Whatsapp />,
    express: <Express />,
    mongoDB: <MongoDB />,
    twitter: <Twitter />,
    codepen: <Codepen />,
    reactJs: <ReactJs />,
    github: <Github />,
    next: <Next />,
    node: <Node />,
    mail: <Mail />,
  };

  const IconName = components[icon];

  return IconName;
};

export default Icons;
