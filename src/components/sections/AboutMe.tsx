import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ContactBar from "./ContactBar";

export default function AboutMe() {
  return (
    <Card className="relative mx-auto mb-2 flex-1">
      <CardHeader>
        <div className="bg-indigo-600 py-1 blur-xl">
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
        <p className="text-sm leading-relaxed text-slate-300 lg:text-lg">
          I'm <span className="font-semibold text-white">Maycol Muñoz</span>, a
          Systems Engineering student focused on full-stack development,
          building scalable backend systems and modern, efficient, user-centered
          frontend interfaces. I enjoy turning ideas into reliable digital
          solutions while continuously improving my skills across the entire
          development stack.
        </p>
      </CardContent>
      <CardFooter>
        <ContactBar />
      </CardFooter>
    </Card>
  );
}
