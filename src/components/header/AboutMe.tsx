import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Bar from "./Bar";

export default function AboutMe() {
  return (
    <Card className="relative mx-auto my-2 flex-1">
      <CardHeader>
        <div className="bg-indigo-600/70 p-2 blur-xl">
          <img
            className="astronaut-float absolute -top-6 left-[40%] mx-auto"
            src="https://github.com/maycolmunoz.png?size=100"
          />
        </div>
        <img
          className="astronaut-float absolute -top-6 left-[40%] mx-auto"
          src="https://github.com/maycolmunoz.png?size=100"
        />
      </CardHeader>
      <CardContent>
        <p className="mt-2 leading-relaxed text-slate-300 lg:text-xl">
          I'm
          <span className="font-semibold text-white"> Maycol Muñoz</span>, a
          Systems Engineering student focused on full-stack development,
          building both scalable backend and modern, efficient frontend
          interfaces.
        </p>
      </CardContent>
      <CardFooter>
        <Bar />
      </CardFooter>
    </Card>
  );
}
