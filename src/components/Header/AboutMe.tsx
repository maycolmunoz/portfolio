import { Button } from "@/components/ui/button";
import Projects from "./Projects";
import Education from "./Education";
import { IconFileCvFilled } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Navbar from "../Navbar/Navbar";

export default function AboutMe() {
  return (
    <Card className="flex-1 mx-auto icon-float my-2">
      <CardHeader>
        <Navbar />
      </CardHeader>
      <CardContent>
        <p className="mt-2 text-slate-300 lg:text-xl leading-relaxed">
          I'm
          <span className="font-semibold text-white"> Maycol Muñoz</span>, a
          Systems Engineering student focused on full-stack development,
          building both scalable backend and modern, efficient frontend
          interfaces.
        </p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-y-2">
        <Button className="w-full mt-4" asChild>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1jyEKvQjJeqxRvF9SVVmq6lgxzunbmIyyJ2XKnduaXlg/edit?usp=sharing"
          >
            <IconFileCvFilled /> View CV
          </a>
        </Button>

        <Projects />

        <Education />
      </CardFooter>
    </Card>
  );
}
