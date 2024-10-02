import React from "react";

export default function Descriptions({ data, selectedProject }: any) {
  return (
    <div className="absolute top-[3px] h-full w-full z-20 pointer-events-none">
      {data.map(
        (
          project: { title: any; color: any },
          i: React.Key | null | undefined
        ) => {
          const { title, color } = project;
          return (
            <div
              key={i}
              className={`flex justify-between items-center px-[10%] transition-[clip-path] duration-400`}
              style={{
                clipPath:
                  selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%)",
                backgroundColor: color,
              }}
            >
              <p className="relative z-10 text-3xl text-zinc-950 uppercase font-bold md:text-[8vw] leading-[7.5vw] m-0">
                {title}
              </p>
            </div>
          );
        }
      )}
    </div>
  );
}
