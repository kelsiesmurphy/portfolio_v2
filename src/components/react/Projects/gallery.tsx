import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";

const images = [
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
];

export default function Gallery() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={gallery}
      className="h-[175vh] w-screen not-prose relative flex gap-[2vw] p-[2vw] overflow-hidden"
    >
      <Column images={[images[0], images[1], images[2]]} y={y} />
      <Column images={[images[3], images[4], images[5]]} y={y2} />
      <Column images={[images[6], images[7], images[8]]} y={y3} />
      <Column images={[images[9], images[10], images[11]]} y={y4} />
    </div>
  );
}

const Column = ({
  images,
  y,
}: {
  images: string[];
  y: MotionValue<number>;
}) => {
  return (
    <motion.div style={{ y }} className="column">
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="h-full w-full relative rounded-[1vw] overflow-hidden"
          >
            <img src={`/${src}`} alt="image" className="object-cover" />
          </div>
        );
      })}
    </motion.div>
  );
};
