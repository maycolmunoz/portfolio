import { techStack } from "@/utils/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

export default function Stack() {
  return (
    <Card className="flex-2 md:h-[80vh] lg:h-[60vh] overflow-y-scroll">
      <CardHeader>
        <CardTitle>I have experience with:</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <Button
            variant="outline"
            key={tech.name}
            className={`flex items-center p-2 rounded-xl shadow-lg transition transform hover:scale-105 ${tech.color}  md:text-lg lg:text-xl`}
          >
            {<tech.icon className="scale-150" stroke={1.25} />}
            <span>{tech.name}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
