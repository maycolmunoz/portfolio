import { contacts } from "@/utils/data";
import EmailIcon from "@/components/Icons/EmailIcon";
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import LayersIcon from "@/components/Icons/LayersIcon";

export default function Navbar() {
  return (
    <nav className="flex flex-col flex-wrap items-center px-10 py-2 mx-auto  md:flex-row">
      <LayersIcon />

      <div className="flex flex-wrap items-center justify-around w-full space-x-0 md:w-auto md:ml-auto md:space-x-5 lg:justify-center mt-2">
        <a
          className="duration-200 hover:scale-125"
          href={contacts.email}
          title="Email"
        >
          <EmailIcon />
        </a>
        <a
          className="duration-200 hover:scale-125"
          href={contacts.github}
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          className="duration-200 hover:scale-125"
          href={contacts.linkedin}
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </nav>
  );
}
