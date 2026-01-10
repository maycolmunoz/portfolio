import MainIcon from "../Icons/MainIcon";
import AboutMe from "./AboutMe";

export default function Header() {
  return (
    <main className="min-h-[85vh] md:flex justify-around items-center flex-wrap ">
      <AboutMe />

      <article className="p-6 md:p-10 flex-1">
        <MainIcon />
      </article>
    </main>
  );
}
