import { About, Contact, Hero, Pricing } from "@/sections";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
