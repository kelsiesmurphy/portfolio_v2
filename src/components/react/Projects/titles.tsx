import React, { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import type { CollectionEntry } from "astro:content";

type Project = CollectionEntry<"project">["data"];

export default function Titles({
  data,
  setSelectedProject,
}: {
  data: Project[];
  setSelectedProject: any;
}) {
  return (
    <div className="w-full border-t border-secondary">
      {data.map((project: any, i: React.Key | null | undefined) => {
        return (
          <a key={i} href={`/projects/${project.slug}/`}>
            <Title
              data={{ ...project.data, i }}
              setSelectedProject={setSelectedProject}
            />
          </a>
        );
      })}
    </div>
  );
}

function Title({ data, setSelectedProject }: any) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div
      ref={container}
      className="relative z-20 border-b border-[rgba(183,171,152,0.25)] cursor-default"
    >
      <div
        className="pl-[10%]"
        onMouseOver={() => {
          setSelectedProject(i);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
        <motion.p
          style={{ clipPath: clip }}
          className="m-0 uppercase cursor-pointer font-bold text-3xl md:text-[8vw] leading-[7.5vw] text-white relative z-20"
        >
          {title}
        </motion.p>
        <p className="absolute m-0 top-0 text-[#1c1c1c] uppercase font-bold text-3xl md:text-[8vw] leading-[7.5vw] z-10">
          {title}
        </p>
      </div>
    </div>
  );
}
