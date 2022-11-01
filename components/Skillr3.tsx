import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionRight?: boolean;
};

function Skillr3({ directionRight }: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{ x: directionRight ? 200 : -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="/bootstrap.png"
        className="border-2 border-[#F7AB0A]/20 rounded-full border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
export default Skillr3;
