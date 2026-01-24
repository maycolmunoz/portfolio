import AboutMe from "../sections/AboutMe";
import { SectionTabs } from "../sections/SectionTabs";

export default function Portfolio() {
  return (
    <main className="min-h-screen flex-wrap items-center justify-around gap-5 p-4 pt-10 md:flex md:p-6">
      <AboutMe />

      <SectionTabs />
    </main>
  );
}
