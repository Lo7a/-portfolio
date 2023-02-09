/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      name: "Airbnb Clone",
      src: "./pro-4.png",
      text: "An Airbnb Clone with calendar and serch option.",
      imgs: ["./react.png", "./nextjs.png", "./tailwind.png"],
    },
    {
      name: "Roll The Dice Game",
      src: "./pro-2.png",
      text: "loren impson2",
      imgs: [],
    },
    { name: "my 3", src: "./pro-1.png", text: "loren impson3", imgs: [] },
    {
      name: "Simon's Game",
      src: "./sim.png",
      text: "loren impson2",
      imgs: ["./html.png", "./css.png", "./jquery.png"],
    },
  ];
  const length = projects.length;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl ">
        Projects
      </h3>

      <div
        className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
rollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50  hover:scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-0 items-center justify-center p-20 md:p-10  h-screen ">
            <motion.img
              className="lg:w-[560px] lg:h-[440px] w-[380px] h-[320px]"
              initial={{ y: -250, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={project.src}
              alt=""
            />
            <div className="space-y-2 px-0 md:px-10 max-w-6xl ">
              <div className="p-5 flex items-center justify-center space-x-10">
                {project.imgs.map((img) => (
                  <img
                    className=" lg:h-16 lg:w-16 h-12 w-12 rounded-full filter "
                    src={img}
                  />
                ))}
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-center">
                Project {i + 1} of {length}:&nbsp;
                <span className="underline text-[#F7AB0A] decoration-[#F7AB0A]/50 ">
                  {project.name}
                </span>
              </h4>

              <p className="text-xl text-center md:text-left ">
                {project.text}
              </p>
            </div>
          </div>
        ))}
        ;
      </div>

      <div className="w-full absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
