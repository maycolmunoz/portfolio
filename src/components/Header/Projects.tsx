import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/utils/data.ts";
import {
  IconBrandGithubFilled,
  IconFoldersFilled,
  IconLink,
} from "@tabler/icons-react";

export default function Projects() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full hover:cursor-pointer" variant="outline">
          <IconFoldersFilled /> Projects
        </Button>
      </SheetTrigger>

      <SheetContent className="h-screen overflow-scroll">
        <SheetHeader>
          <SheetTitle>Projects</SheetTitle>
          <SheetDescription>A summary of my Projects</SheetDescription>
          <Accordion type="single" collapsible defaultValue="item-0">
            {projects.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto rounded-lg mb-1"
                  />

                  {item.stack.map((tech, tIndex) => (
                    <Badge key={tIndex} className="m-1 text-xs font-semibold">
                      {tech}
                    </Badge>
                  ))}

                  <p className="text-sm mb-2">{item.description}</p>

                  <div className="flex  gap-2">
                    {item.repository && (
                      <Button
                        asChild
                        variant="outline"
                        className="text-xs flex-1"
                      >
                        <a
                          href={item.repository}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <IconBrandGithubFilled />
                          Repository
                        </a>
                      </Button>
                    )}

                    {item.link && (
                      <Button
                        asChild
                        variant="outline"
                        className="text-xs flex-1"
                      >
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <IconLink stroke={2} /> Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
