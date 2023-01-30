import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionRight?: boolean;
  directionLeft?: boolean;
  logo: string;
  percentage: string;
};

function Skill({ directionRight, directionLeft, logo, percentage }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionRight ? 200 : directionLeft ? -200 : 0,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={logo}
        className="border-2 border-[#F7AB0A]/20  border-gray-500   rounded-full object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-w-20 md:w-24 md:h-24 xl:w-28 xl:h-28  rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-md md:text-xl lg:text-2xl font-bold text-black opacity-100">
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
