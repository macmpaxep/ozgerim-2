import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Directions, Numbers } from "@/components/directions";
import { Founder } from "@/components/founder";
import { Portfolio } from "@/components/portfolio";
import { Book } from "@/components/book";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Directions />
        <Numbers />
        <Founder />
        <Portfolio />
        <Book />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
