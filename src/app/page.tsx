import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <Work />
    </main>
  );
}
