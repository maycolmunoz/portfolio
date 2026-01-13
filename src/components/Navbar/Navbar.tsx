import { contacts } from "@/utils/data";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconFileCvFilled,
  IconMailFilled,
} from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-around items-center bg-linear-to-r from-indigo-500/90 to-sky-500/0.5 mx-auto rounded-2xl px-2 py-1 font-extrabold gap-2 w-full">
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
