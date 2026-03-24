import Toast from "@/ui/components/toast";
import About from "../ui/page/about";
import Footer from "../ui/page/footer";
import Hero from "../ui/page/hero";
import LifeStyle from "../ui/page/lifeStyle";
import Skills from "../ui/page/skills";
import Works from "../ui/page/works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Works />
      <About />
      <LifeStyle />
      <Footer />
      <Toast title={"Currently Building"} content={"Still cooking… Currently refining this portfolio."}/>
    </main>
  );
}
