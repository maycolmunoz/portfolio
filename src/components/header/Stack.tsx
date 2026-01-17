import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { techStack } from "@/utils/data";
import { Button } from "../ui/button";

export default function Stack() {
  return (
    <Card className="flex-2 overflow-y-scroll md:h-[80vh] lg:h-[60vh]">
      <CardHeader>
        <CardTitle>I have experience with:</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <Button
            variant="outline"
            key={tech.name}
            className={`flex transform items-center rounded-xl p-2 shadow-lg transition hover:scale-105 ${tech.color} md:text-lg lg:text-xl`}
          >
            {<tech.icon className="scale-150" stroke={1.25} />}
            <span>{tech.name}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
