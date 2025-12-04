import AboutMe from "./AboutMe";

export default function Header() {
  return (
    <main className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 items-center">
      <AboutMe />

      <article className="flex justify-center items-center px-4"></article>
    </main>
  );
}
