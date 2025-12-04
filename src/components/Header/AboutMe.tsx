import { Badge } from "@/components/ui/badge";
import { techStack } from "@/utils/data";

export default function AboutMe() {
  return (
    <article className="space-y-6 px-6 md:px-10">
      <div className="rounded-lg bg-linear-to-r from-indigo-950 to-sky-950 animate-pulse text-center">
        <Badge
          className="bg-secondary py-2 px-4 text-base md:text-xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-sky-500"
          asChild
        >
          <h1>Full Stack Developer</h1>
        </Badge>
      </div>

      <p className="mt-2 text-slate-300 text-base md:text-xl leading-relaxed">
        My name is
        <span className="font-semibold text-white"> Maycol Muñoz</span>, a
        Systems Engineering student focused on full-stack development, building
        both scalable backend and modern, efficient frontend interfaces. I have
        experience with technologies like:
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {techStack.map((tech) => (
          <Badge
            key={tech.name}
            className={`px-3 text-sm font-semibold ${tech.color} cursor-default`}
          >
            ➤ {tech.name}
          </Badge>
        ))}
      </div>
    </article>
  );
}
