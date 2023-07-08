import FreeCodeCamp from "../icons/freecodecamp";
import Javascript from "../icons/javascript";
import Typescript from "../icons/typescript";
import MaterialUi from "../icons/materialUi";
import Firebase from "../icons/firebase";
import Tailwind from "../icons/tailwind";
import Linkedin from "../icons/linkedin";
import Whatsapp from "../icons/whatsapp";
import Express from "../icons/express";
import MongoDB from "../icons/mongodb";
import Twitter from "../icons/twitter";
import Codepen from "../icons/codepen";
import ReactJs from "../icons/react";
import GraphQl from "../icons/graphQl";
import Github from "../icons/github";
import Next from "../icons/next";
import Node from "../icons/node";
import Mail from "../icons/mail";
import RTK from "../icons/rtk";

export type IconNames =
  | "freeCodeCamp"
  | "javascript"
  | "typescript"
  | "materialUi"
  | "firebase"
  | "tailwind"
  | "linkedin"
  | "whatsapp"
  | "express"
  | "mongoDB"
  | "twitter"
  | "codepen"
  | "reactJs"
  | "graphQl"
  | "github"
  | "next"
  | "node"
  | "mail"
  | "rtk";

interface Props {
  icon: IconNames;
}

const Icons: React.FC<Props> = ({ icon }) => {
  const components = {
    freeCodeCamp: <FreeCodeCamp />,
    javascript: <Javascript />,
    typescript: <Typescript />,
    materialUi: <MaterialUi />,
    firebase: <Firebase />,
    tailwind: <Tailwind />,
    linkedin: <Linkedin />,
    whatsapp: <Whatsapp />,
    express: <Express />,
    mongoDB: <MongoDB />,
    twitter: <Twitter />,
    codepen: <Codepen />,
    reactJs: <ReactJs />,
    graphQl: <GraphQl />,
    github: <Github />,
    next: <Next />,
    node: <Node />,
    mail: <Mail />,
    rtk: <RTK />,
  };

  const IconName = components[icon];

  return IconName;
};

export default Icons;
