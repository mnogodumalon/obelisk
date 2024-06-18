import Telegram from "../assets/icons/telegram.png";
import Twitter from "../assets/icons/twitter.png";
import Discord from "../assets/icons/discord.png";
import Chat from "../assets/icons/chat.png";
import Bot from "../assets/icons/bot.png";
import GradientText from "./GradientText.jsx";

function Socials() {
  return (
    <div id="socials" className="pt-44 flex flex-col items-center gap-6">
      <h1 className="font-medium text-4xl">SOCIAL LINKS</h1>
      <GradientText text="glad to see you in our community!" />
      <div className="mt-16 flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="flex flex-col items-center gap-1">
          <img src={Telegram} alt="Telegram icon" />
          <p className="text-base text-gray-600">Channel</p>
        </div>
        <div className="flex flex-col items-center gap-[11px]">
          <img src={Chat} alt="Telegram icon" />
          <p className="text-base text-gray-600">Chat</p>
        </div>
        <div className="flex flex-col items-center gap-[12px]">
          <img src={Bot} alt="Telegram icon" />
          <p className="text-base text-gray-600">Tradebot</p>
        </div>
        <div className="flex flex-col items-center gap-[13px]">
          <img src={Twitter} alt="Telegram icon" />
          <p className="text-base text-gray-600">Twitter</p>
        </div>
        <div className="flex flex-col items-center gap-[15px]">
          <img src={Discord} alt="Telegram icon" />
          <p className="text-base text-gray-600">Discord</p>
        </div>
      </div>
    </div>
  );
}

export default Socials;
