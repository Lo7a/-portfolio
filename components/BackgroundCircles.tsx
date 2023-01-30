import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex justify-center items-center pt-20"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-80 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[350px] w-[350px] mt-80 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-80 animate-ping" />
      <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[720px] w-[720px] mt-80 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[820px] w-[820px] mt-80 animate-p " />
    </motion.div>
  );
}

export default BackgroundCircles;
