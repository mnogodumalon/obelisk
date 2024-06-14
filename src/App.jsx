import Navbar from "./components/Navbar";
import BackgroundStars from "./components/BackgroundStars";
import Hero from "./components/Hero";
import Description from "./components/Description";

function App() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <BackgroundStars />
      <Navbar />
      <Hero />
      <Description />
    </div>
  );
}

export default App;
