import { Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

export default function Socials() {
  return (
    <div className="gap-4 hidden md:flex items-center">
      <Button size="icon" variant="ghost" asChild>
        <a
          href="https://github.com/kelsiesmurphy"
          className="text-inherit"
          target="_blank"
        >
          <span className="sr-only">Check out Kelsie Murphy's GitHub</span>
          <Github className="h-6 w-6" />
        </a>
      </Button>
      <Button size="icon" variant="ghost" asChild>
        <a
          href="https://linkedin.com/in/kelsiesmurphy/"
          className="text-inherit"
          target="_blank"
        >
          <span className="sr-only">Follow Kelsie Murphy on LinkedIn</span>
          <Linkedin className="h-6 w-6" />
        </a>
      </Button>
      <Button size="icon" variant="ghost" asChild>
        <a
          href="https://x.com/kelsiesmurphy"
          className="text-inherit"
          target="_blank"
        >
          <span className="sr-only">
            Follow Kelsie Murphy on X (Previously Twitter)
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon
              className="st0"
              points="21.3,21.1 9.9,2.9 2.7,2.9 14.1,21.1 "
            ></polygon>
            <line className="st0" x1="2.7" y1="21.1" x2="9.9" y2="14.5"></line>
            <line className="st0" x1="14.1" y1="9.5" x2="21.3" y2="2.9"></line>
          </svg>
        </a>
      </Button>
    </div>
  );
}
