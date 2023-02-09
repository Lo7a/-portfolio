import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center  ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex flex-row items-center "
      >
        <SocialIcon
          url="https://www.facebook.com/LahavKlugman7"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Lo7a"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/lahav-klugman"
          fgColor="gray"
          bgColor="transparent"
        />
        <a
          href="lahav-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className=" cursor-pointer p-3  uppercase md:inline-flex text-md text-gray-400"
        >
          RESUME
        </a>
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className=" flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <p className="p-3 uppercase  hidden md:inline-flex text-md text-gray-400">
            Get In Touch
          </p>
          <SocialIcon
            className="cursor-pointer mr-10"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          ></SocialIcon>
        </motion.div>
      </Link>
    </header>
  );
}
