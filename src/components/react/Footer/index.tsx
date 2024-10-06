import { useRef } from "react";
import TextDisperse from "@/components/react/Footer/TextDisperse";

export default function Footer() {
  const background: any = useRef(null);

  const setBackground = (isActive: boolean) => {
    if (background.current)
      background.current.style.opacity = isActive ? 0.8 : 0;
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="w-[50vw] text-white">
        <div className="introLine">
          <p>Kelsie</p>
          <p>Murphy</p>
        </div>
        <div className="introLine">
          <p></p>
          <p>Software</p>
        </div>
        <div className="introLine">
          <p>Developer</p>
        </div>
        <a href="/blog" className="inline-flex">
          <TextDisperse setBackground={setBackground}>
            <p>→Blog</p>
          </TextDisperse>
        </a>
        <a href="/about" className="inline-flex -right-10 relative">
          <TextDisperse setBackground={setBackground}>
            <p>→About</p>
          </TextDisperse>
        </a>
      </div>
      <div
        ref={background}
        className="bg-zinc-950 absolute w-full h-full pointer-events-none opacity-0 transition-opacity duration-500"
      ></div>
    </main>
  );
}
