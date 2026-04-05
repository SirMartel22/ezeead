import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import IntroVideo from "./components/IntroVideo";
import Services from "./components/Services";
import WorkSlider from "./components/WorkSlider";
import NewsFeed from "./components/NewsFeed";
import FooterCTA from "./components/FooterCTA";

export default function Home() {
  return (
    <div className="main-layout">
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <div className="relative z-20">
          <Partners />
          <IntroVideo />
          <Services />
          <WorkSlider />
          <NewsFeed />
          <FooterCTA />
        </div>
      </main>
    </div>
  );
}
