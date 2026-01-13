import AboutMe from "./AboutMe";
import Stack from "./Stack";

export default function Header() {
  return (
    <main className="min-h-screen md:flex justify-around items-center flex-wrap gap-5 p-6">
      <AboutMe />
      
      <Stack />
    </main>
  );
}
