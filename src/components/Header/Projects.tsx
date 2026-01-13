import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/utils/data.ts";
import { IconBrandGithubFilled, IconLink } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  return (
    <Card className="flex-2 md:h-[80vh] lg:h-[60vh] overflow-y-scroll">
      <CardHeader>
        <CardTitle>A summary of my Projects:</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="item-0">
          {projects.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4">
                  <div className="flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto max-h-48 lg:max-h-none object-contain rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-1">
                      {item.stack.map((tech, tIndex) => (
                        <Badge
                          key={tIndex}
                          className="text-[10px] font-semibold"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="flex flex-row gap-2 mt-auto">
                      {item.repository && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <a
                            href={item.repository}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <IconBrandGithubFilled className="h-4 w-4" />
                            Repo
                          </a>
                        </Button>
                      )}

                      {item.link && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <IconLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
