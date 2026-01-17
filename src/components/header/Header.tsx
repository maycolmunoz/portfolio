import AboutMe from "./AboutMe";
import { Sections } from "./Sections";

export default function Header() {
  return (
    <main className="min-h-screen flex-wrap items-center justify-around gap-5 p-4 pt-10 md:flex md:p-6">
      <AboutMe />

      <Sections />
    </main>
  );
}
