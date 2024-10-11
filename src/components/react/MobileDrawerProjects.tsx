import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "../ui/button";

export default function MobileDrawerProjects({ projects }: any) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger
          className={
            buttonVariants({ variant: "secondary" }) +
            " w-full gap-3 hover:no-underline"
          }
        >
          Projects
        </AccordionTrigger>
        <AccordionContent className="py-0 px-4">
          <ul className="space-y-3 p-2 w-full">
            {projects.map((project: any) => {
              return (
                <Button
                  asChild
                  className={
                    buttonVariants({ variant: "secondary" }) + " w-full"
                  }
                >
                  <a href={`/projects/${project.data.title.toLowerCase()}`} className="flex gap-4">
                    <img
                      src={`/assets/logos/${project.data.title.toLowerCase()}.svg`}
                      className="h-4 w-4 aspect-square"
                    />
                    {project.data.title}
                  </a>
                </Button>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
