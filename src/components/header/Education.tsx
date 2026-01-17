import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/utils/data.js";

export default function Education() {
  return (
    <Card className="flex-2 overflow-y-scroll md:h-[80vh] lg:h-[60vh]">
      <CardHeader>
        <CardTitle> A summary of my academic background:</CardTitle>
      </CardHeader>
      <CardContent className="">
        <Accordion type="single" collapsible>
          {education.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
