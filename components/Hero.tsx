/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  const [text, cout] = useTypewriter({
    words: [
      "Hi, My Name Is Lahav klugman",
      "Guy-who-loves-to-play-video-games.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          className="relative rounded-full h-60 w-60 mx-auto object-cover  delay-0 hover:delay-150"
          src="/lahav.png"
          alt=""
        />
      </motion.div>

      <div className="z-20">
        <h2 className="text-md uppercase text-gray-500 pb-2 tracking-[6px]">
          Software Engineer Student
        </h2>
        <h1 className="text-xl lg:text-2xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-2 font-normal">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
