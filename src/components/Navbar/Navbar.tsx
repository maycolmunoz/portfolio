import { contacts } from "@/utils/data";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
} from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className="flex flex-col flex-wrap justify-center items-center px-5 py-2 mx md:flex-row">
      <div className="flex flex-wrap items-center justify-around w-full space-x-0 md:w-auto md:ml-auto md:space-x-5 lg:justify-center mt-2 animate-pulse text-base md:text-md font-extrabold bg-linear-to-r from-indigo-500 to-sky-500 mx-auto rounded-2xl px-2 py-1 duration-200">
        <h1>Full Stack Developer</h1>

        <div className="flex gap-1">
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
      </div>
    </nav>
  );
}
