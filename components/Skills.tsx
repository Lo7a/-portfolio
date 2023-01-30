import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row md:max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        MY Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[2px] text-gray-500 text-m">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 gap-7">
        <Skill directionLeft logo="/html.png" percentage="90" />
        <Skill directionLeft logo="/css.png" percentage="90" />
        <Skill directionLeft logo="/javascript.png" percentage="80" />
        <Skill directionLeft logo="/vscode1.png" percentage="90" />
        <Skill directionLeft logo="/react.png" percentage="80" />
        <Skill directionRight logo="/nextjs.png" percentage="70" />
        <Skill directionLeft logo="/python.png" percentage="80" />
        <Skill directionRight logo="/wordpress.png" percentage="90" />
        <Skill directionRight logo="/java.png" percentage="70" />
        <Skill directionRight logo="/tailwind.png" percentage="90" />
        <Skill directionRight logo="/nodejs.png" percentage="80" />
        <Skill directionRight logo="/bootstrap.png" percentage="90" />
      </div>
    </motion.div>
  );
}

export default Skills;
