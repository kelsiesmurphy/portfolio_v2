import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function ProjectFooter({
  title,
  color,
  offsetAmount,
}: {
  title?: string;
  color?: string;
  offsetAmount?: number;
}) {
  const container = useRef(null);
  const paths = useRef<(SVGTextPathElement | null)[]>([]);

  const offset = offsetAmount ? offsetAmount : 24;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (e: number) => {
      paths.current.forEach((path, i) => {
        if (path) {
          path.setAttribute(
            "startOffset",
            `${-offset + i * offset + e * offset}%`
          );
        }
      });
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={container}>
      <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text
          className="text-[6px] font-bold uppercase"
          style={{ fill: color ? color : "#52525b" }}
        >
          {[...Array(12)].map((_, i) => (
            <textPath
              key={i}
              ref={(ref) => (paths.current[i] = ref)}
              startOffset={`${i * offset}%`}
              href="#curve"
            >
              {title}
            </textPath>
          ))}
        </text>
      </svg>
      <Logos scrollProgress={scrollYProgress} />
    </div>
  );
}

const Logos = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);

  const images = ["bjss", "communityspot", "greencheck", "planetcareer"];

  return (
    <div className="h-[250px] bg-zinc-200 overflow-hidden">
      <motion.div
        style={{ y }}
        className="h-full flex flex-wrap justify-center gap-6 md:gap-20 items-center p-4 md:p-10"
      >
        {images.map((path, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="link"
                  size="icon"
                  className="p-4 h-20 w-20 md:w-24 md:h-24 rounded-2xl hover:-translate-y-2 transition-transform duration-200"
                  asChild
                >
                  <a href={`/projects/${path}`}>
                    <img
                      key={path}
                      className="w-16 h-16 md:w-20 md:h-20"
                      src={`/assets/logos/${path}.svg`}
                      alt={`Logo for ${path}`}
                    />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{path.toUpperCase()}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </motion.div>
    </div>
  );
};
