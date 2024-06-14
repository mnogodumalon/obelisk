import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import BackgroundStars from "./components/BackgroundStars";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <BackgroundStars />
      <Navbar />
    </div>
  );
}

export default App;
