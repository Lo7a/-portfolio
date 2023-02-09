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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        MY Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[1px] md:tracking-[2px] text-gray-500 text-xs md:text-lg">
        Hover over a skill for current proficiency
      </h3>

      <div className=" grid grid-cols-3 gap-4 md:gap-5 md:pt-20">
        <Skill directionLeft logo="/html.png" percentage="90" />
        <Skill directionLeft logo="/css.png" percentage="90" />
        <Skill directionLeft logo="/javascript.png" percentage="80" />
        <Skill directionLeft logo="/vscode1.png" percentage="90" />
        <Skill directionLeft logo="/react.png" percentage="80" />
        <Skill directionRight logo="/nextjs.png" percentage="70" />
        <Skill directionLeft logo="/python.png" percentage="80" />
        <Skill directionRight logo="/tailwind.png" percentage="90" />
        <Skill directionRight logo="/java.png" percentage="80" />
        <Skill directionRight logo="/firebase.png" percentage="90" />
        <Skill directionRight logo="/nodejs.png" percentage="80" />
        <Skill directionRight logo="/mongo.png" percentage="70" />
      </div>
    </motion.div>
  );
}

export default Skills;
