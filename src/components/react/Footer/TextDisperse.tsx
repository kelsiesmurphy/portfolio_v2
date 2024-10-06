import {
  useState,
  type JSXElementConstructor,
  type ReactElement,
  type ReactNode,
  type ReactPortal,
} from "react";
import { motion, MotionValue } from "framer-motion";
import { disperse } from "./anim";
import type { JSX } from "react/jsx-runtime";

export default function TextDisperse({ children, setBackground }: any) {
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element: { props: { children: any } }) => {
    let chars: JSX.Element[] = [];
    const word = element.props.children;
    word
      .split("")
      .forEach(
        (
          char:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | MotionValue<number>
            | MotionValue<string>
            | null
            | undefined,
          i: any
        ) => {
          chars.push(
            <motion.span
              custom={i}
              variants={disperse}
              animate={isAnimated ? "open" : "closed"}
              key={char + i}
            >
              {char}
            </motion.span>
          );
        }
      );
    return chars;
  };

  const manageMouseEnter = () => {
    setBackground(true);
    setIsAnimated(true);
  };
  const manageMouseLeave = () => {
    setBackground(false);
    setIsAnimated(false);
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      className="introLine"
    >
      {getChars(children)}
    </div>
  );
}
