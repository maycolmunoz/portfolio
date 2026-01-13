import { Button } from "@/components/ui/button";
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
    <Card className="flex-1 mx-auto my-2 relative">
      <CardHeader>
        <div className="bg-indigo-600/70 blur-xl p-2">
         <img
          className="mx-auto astronaut-float absolute -top-6 left-[40%]"
          src="https://github.com/maycolmunoz.png?size=100"
        /></div>
         <img
          className="mx-auto astronaut-float absolute -top-6 left-[40%]"
          src="https://github.com/maycolmunoz.png?size=100"
        />
       
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
      <CardFooter className="flex justify-between flex-wrap gap-2">
        <Button className="md:w-full" asChild>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1jyEKvQjJeqxRvF9SVVmq6lgxzunbmIyyJ2XKnduaXlg/edit?usp=sharing"
          >
            <IconFileCvFilled /> View CV
          </a>
        </Button>
        <Navbar />
      </CardFooter>
    </Card>
  );
}
