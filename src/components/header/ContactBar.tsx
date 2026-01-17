import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconFileCvFilled,
  IconMailFilled,
} from "@tabler/icons-react";
import { contacts } from "@/utils/data";

export default function Bar() {
  return (
    <nav className="mx-auto flex w-full flex-wrap items-center justify-around gap-2 rounded-2xl bg-linear-to-r from-indigo-500/90 to-sky-500/0.5 px-2 py-1 font-extrabold">
      <h1>Full Stack Developer</h1>

      <div className="flex gap-1">
        <a
          className="duration-200 hover:scale-125"
          href={contacts.cv}
          target="_blank"
          title="CV"
          rel="noopener noreferrer"
        >
          <IconFileCvFilled width={30} height={30} />
        </a>
        <a
          className="duration-200 hover:scale-125"
          href={contacts.email}
          title="Email"
        >
          <IconMailFilled width={30} height={30} />
        </a>
        <a
          className="duration-200 hover:scale-125"
          href={contacts.github}
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
        >
          <IconBrandGithubFilled width={30} height={30} />
        </a>
        <a
          className="duration-200 hover:scale-125"
          href={contacts.linkedin}
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedinFilled width={30} height={30} />
        </a>
      </div>
    </nav>
  );
}
