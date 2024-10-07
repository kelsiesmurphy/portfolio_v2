import { buttonVariants, Button } from "@/components/ui/button";
import { useState } from "react";
import { SITE_TITLE } from "@/consts";
import Socials from "./Socials";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="px-4 flex min-h-28 md:min-h-40 w-full justify-center">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="link" className="mx-0 px-0 font-bold text-lg uppercase">
              <a href="/" className="text-inherit">
                {SITE_TITLE}
              </a>
            </Button>
            <div className="hidden md:block">
              <a href="blog" className={buttonVariants({ variant: "link" })}>
                Blog
              </a>
              <a href="about" className={buttonVariants({ variant: "link" })}>
                About Me
              </a>
            </div>
          </div>
          <Socials />
          <Button
            size="icon"
            variant="ghost"
            className="flex flex-col items-center justify-center md:hidden"
            onClick={() => toggleMobileMenu()}
          >
            <span
              className={`block h-0.5 w-6 rounded-sm bg-primary transition-all duration-100 ease-out ${
                mobileMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`my-0.5 block h-0.5 w-6 rounded-sm bg-primary transition-all duration-100 ease-out ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-sm bg-primary transition-all duration-100 ease-out ${
                mobileMenuOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
              }`}
            ></span>
          </Button>
        </nav>
        {mobileMenuOpen && (
          <div className="absolute top-0 mt-28 md:mt-40 min-h-screen w-full bg-background p-8">
            <p>Add Mobile header here</p>
          </div>
        )}
      </header>
      {/* <section className="fixed left-0 hidden h-screen w-80 border-r px-6 py-8 lg:flex">
        <h1>sidebar</h1>
        <ModeToggle />
      </section> */}
    </>
  );
}
