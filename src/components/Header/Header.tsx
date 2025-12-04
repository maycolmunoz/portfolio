import AboutMe from "./AboutMe";
import Image from "@/assets/image.webp";

export default function Header() {
  return (
    <main className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 items-center">
      <AboutMe />

      <article className="px-6 md:px-10">
        <img src={Image} className="w-10/12  float" />
      </article>
    </main>
  );
}
