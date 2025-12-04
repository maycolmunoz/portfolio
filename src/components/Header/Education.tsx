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
import { education } from "@/utils/data.js";

export default function Education() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:w-full hover:cursor-pointer" variant="outline">
          📚 Education
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Education</SheetTitle>
          <SheetDescription>
            A summary of my academic background.
          </SheetDescription>
          <Accordion type="single" collapsible>
            {education.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
