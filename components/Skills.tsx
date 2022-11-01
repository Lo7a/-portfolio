import React from "react";
import { motion } from "framer-motion";
import Skillr1 from "./Skillr1";
import Skillr2 from "./Skillr2";
import Skill2 from "./Skill2";
import Skill1 from "./Skill1";
import Skill3 from "./Skill3";
import Skillr3 from "./Skillr3";
import Skill4 from "./Skill4";
import Skillr4 from "./Skillr4";
import Skill5 from "./Skill5";
import Skillr5 from "./Skillr5";
import Skillr6 from "./Skillr6";
import Skill6 from "./Skill6";

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
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-m">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 gap-7">
        <Skillr1 />
        <Skillr2 />
        <Skill1 />
        <Skill2 />
        <Skillr3 />
        <Skillr4 />
        <Skill3 />
        <Skill4 />
        <Skillr5 />
        <Skillr6 />
        <Skill5 />
        <Skill6 />
      </div>
    </motion.div>
  );
}

export default Skills;
