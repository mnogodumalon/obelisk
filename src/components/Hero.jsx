import Logo from "../assets/logo.png";
import ShinyButton from "./ShinyButton";

function Hero() {
  return (
    <div className="hero flex items-start gap-10">
      <img src={Logo} alt="Obilisk Logo" />
      <div className="flex gap-16 flex-col items-center mt-24">
        <h1 className="text-[64px] font-semibold">Welcome to Obelisk!</h1>
        <div className="flex gap-8">
          <div className=" flex justify-center items-center">
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-border rounded-lg blur"
                // style="background-size: 200% 200%;"
              ></div>
              <button className="font-semibold text-base px-14 py-5 rounded-full bg-blackish text-white shadow-glow relative border-thin border-gray-700">
                Learn more
              </button>
            </div>
          </div>
          <ShinyButton />
        </div>
      </div>
    </div>
  );
}

export default Hero;
