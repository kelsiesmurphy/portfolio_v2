import { useRef, useEffect } from "react";

export default function Home() {
  const container: any = useRef(null);
  const stickyMask: any = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 100;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    if (container.current && stickyMask.current) {
      requestAnimationFrame(animate);
    }
  }, []);

  const animate = () => {
    // Ensure refs are defined before accessing their properties
    if (!container.current || !stickyMask.current) return;

    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";

    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (!container.current || !stickyMask.current) return 0;

    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <div ref={container} className="relative h-[300vh] bg-background">
      <div
        ref={stickyMask}
        className="stickyMask flex overflow-hidden sticky top-0 h-screen items-center justify-center"
      >
        <video autoPlay muted loop>
          <source src="/assets/forest.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
