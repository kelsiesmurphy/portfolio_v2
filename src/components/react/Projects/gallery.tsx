import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";

// const images = [
//   "1.jpg",
//   "1.jpg",
//   "1.jpg",
//   "1.jpg",
//   "1.jpg",
//   "1.jpg",
//   "1.jpg",
//   "1.jpg",
//   "1.jpg",
//   "1.jpg",
//   "1.jpg",
//   "1.jpg",
// ];

export default function Gallery({galleryImages}: {galleryImages:string[]}) {
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
      <Column images={[galleryImages[0], galleryImages[1], galleryImages[2]]} y={y} />
      <Column images={[galleryImages[3], galleryImages[4], galleryImages[5]]} y={y2} />
      <Column images={[galleryImages[6], galleryImages[7], galleryImages[8]]} y={y3} />
      <Column images={[galleryImages[9], galleryImages[10], galleryImages[11]]} y={y4} />
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
            className="h-full w-full relative rounded-[1vw] shadow-lg overflow-hidden"
          >
            <img src={`/projects/${src}`} alt="image" className="object-cover" />
          </div>
        );
      })}
    </motion.div>
  );
};
