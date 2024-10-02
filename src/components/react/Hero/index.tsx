import { useRef } from "react";

export default function Hero() {
  const plane: any = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e: any) => {
    if (plane.current) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const perspective = window.innerWidth * 4;
      const rotateX = maxRotate * x - maxRotate / 2;
      const rotateY = (maxRotate * y - maxRotate / 2) * -1;
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="h-screen w-screen flex"
    >
      <div
        ref={plane}
        className="flex-1 flex flex-col justify-center text-left items-center"
      >
        <Text3d primary={"Kelsie"} secondary={"Kelsie"} />
        <Text3d primary={"Murphy"} secondary={"Murphy"} />
      </div>
    </div>
  );
}

function Text3d({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="relative textContainer">
      <p className="text-[8vw] leading-[8vw] font-bold m-0 text-[#b7ab98] primary">
        {primary}
      </p>
      <p className="text-[8vw] leading-[8vw] font-bold m-0 absolute top-0 opacity-0 text-white secondary">
        {secondary}
      </p>
    </div>
  );
}
