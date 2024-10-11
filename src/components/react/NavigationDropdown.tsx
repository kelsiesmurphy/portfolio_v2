import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "../ui/button";

export function NavigationDropdown({ projects }: any) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              buttonVariants({ variant: "link" }) + " hover:bg-transparent"
            }
          >
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="space-y-3 p-6 w-[210px]">
              {projects.map((project: any) => {
                return (
                  <ListItem
                    href={`/projects/${project.data.title.toLowerCase()}`}
                    title={project.data.title}
                  >
                    {project.data.title.toLowerCase()}
                  </ListItem>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center gap-4">
            <img
              src={`/assets/logos/${children}.svg`}
              className="h-4 w-4 aspect-square"
            />
            {title}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
