import { createContext } from "react";

import { Section } from "../utils/schema";

const sectionContext = createContext({
  section: "about",
  setSection: (section: Section) => {},
});

export default sectionContext;
