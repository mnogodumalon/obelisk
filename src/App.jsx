import Navbar from "./components/Navbar";
import BackgroundStars from "./components/BackgroundStars";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Benefits from "./components/Benefits";
import Roadmap from "./components/Roadmap";
import Partnerships from "./components/Partnerships";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <BackgroundStars />
      <Navbar />
      <Hero />
      <Description />
      <Benefits />
      <Roadmap />
      <Partnerships />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
