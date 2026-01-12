import { Button } from "@/components/ui/button";
import Projects from "./Projects";
import Education from "./Education";
import { IconFileCvFilled } from "@tabler/icons-react";

export default function AboutMe() {
  return (
    <article className="space-y-6 px-6 md:px-10 flex-1">
      <p className="mt-2 text-slate-300 text-base lg:text-xl leading-relaxed">
        My name is
        <span className="font-semibold text-white"> Maycol Muñoz</span>, a
        Systems Engineering student focused on full-stack development, building
        both scalable backend and modern, efficient frontend interfaces.
      </p>

      <div className="space-x-2 space-y-4">
        <Button className="lg:w-full mt-4" variant="outline" asChild>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1jyEKvQjJeqxRvF9SVVmq6lgxzunbmIyyJ2XKnduaXlg/edit?usp=sharing"
          >
            <IconFileCvFilled /> View CV
          </a>
        </Button>

        <Projects />

        <Education />
      </div>
    </article>
  );
}
