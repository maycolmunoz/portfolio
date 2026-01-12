import AboutMe from "./AboutMe";
import Stack from "./Stack";

export default function Header() {
  return (
    <main className="min-h-[85vh] md:flex justify-around items-center flex-wrap ">
      <AboutMe />

      <article className="p-6 md:p-10 flex-1">
        <Stack/>
      </article>
    </main>
  );
}
