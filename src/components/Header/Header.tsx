import AboutMe from "./AboutMe";
import { Sections } from "./Sections";

export default function Header() {
  return (
    <main className="min-h-screen md:flex justify-around items-center flex-wrap gap-5 md:p-6 p-4 pt-10">
      <AboutMe />

      <Sections />
    </main>
  );
}
