import { buttonVariants, Button } from "@/components/ui/button";
import { SITE_TITLE } from "@/consts";
import { MobileDrawer } from "./MobileDrawer";
import { ModeToggle } from "./ModeToggle";
import Socials from "./Socials";
import { NavigationDropdown } from "./NavigationDropdown";

export default function Navigation({ projects }: any) {
  return (
    <>
      <header className="px-4 flex min-h-28 md:min-h-40 w-full justify-center">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="link"
              className="mx-0 px-0 font-bold text-lg uppercase"
            >
              <a href="/" className="text-inherit">
                {SITE_TITLE}
              </a>
            </Button>
            <div className="hidden md:flex gap-2">
              <NavigationDropdown projects={projects} />
              <a href="/blog" className={buttonVariants({ variant: "link" })}>
                Blog
              </a>
              <a href="/about" className={buttonVariants({ variant: "link" })}>
                About Me
              </a>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Socials />
            <ModeToggle />
            <div className="md:hidden">
              <MobileDrawer projects={projects} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
