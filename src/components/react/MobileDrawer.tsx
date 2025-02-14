import { Github, Linkedin, Menu } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ModeToggleMobile } from "./ModeToggleMobile";
import MobileDrawerProjects from "./MobileDrawerProjects";

export function MobileDrawer({ projects }: any) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm py-12">
          <div className="space-y-4">
            <a
              href="/"
              className={buttonVariants({ variant: "secondary" }) + " w-full"}
            >
              Home
            </a>
            <MobileDrawerProjects projects={projects} />
            <a
              href="/blog"
              className={buttonVariants({ variant: "secondary" }) + " w-full"}
            >
              Blog
            </a>
            <a
              href="/about"
              className={buttonVariants({ variant: "secondary" }) + " w-full"}
            >
              About Me
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/kelsiesmurphy"
                target="_blank"
                className={
                  buttonVariants({ variant: "outline" }) + " w-full flex gap-2"
                }
              >
                <span className="sr-only">
                  Check out Kelsie Murphy's GitHub
                </span>
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/kelsiesmurphy/"
                target="_blank"
                className={
                  buttonVariants({ variant: "outline" }) + " w-full flex gap-2"
                }
              >
                <span className="sr-only">Connect with Kelsie on LinkedIn</span>
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/kelsiesmurphy"
                target="_blank"
                className={
                  buttonVariants({ variant: "outline" }) + " w-full flex gap-2"
                }
              >
                <span className="sr-only">
                  Follow Kelsie on X (previously Twitter)
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                >
                  <polygon
                    className="st0"
                    points="21.3,21.1 9.9,2.9 2.7,2.9 14.1,21.1 "
                  ></polygon>
                  <line
                    className="st0"
                    x1="2.7"
                    y1="21.1"
                    x2="9.9"
                    y2="14.5"
                  ></line>
                  <line
                    className="st0"
                    x1="14.1"
                    y1="9.5"
                    x2="21.3"
                    y2="2.9"
                  ></line>
                </svg>
              </a>
            </div>
            <ModeToggleMobile />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
