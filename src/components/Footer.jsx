import obeliskIcon from "../assets/obelisk-icon.png";
import Ton from "../assets/icons/ton.png";
import ShinyButton from "./ShinyButton";

function Footer() {
  return (
    <div className="mt-60 border-t-[1px] border-gray-500/30 ">
      <div className="rounded-3xl gap-16 mt-16 border-[1px] p-8 border-gray-500/30 bg-neutral-950/30 flex items-start">
        <div className="flex flex-col items-start w-[520px]">
          <a
            href="#"
            className="hover:bg-gray-700 px-3 py-2 rounded font-medium	text-xl"
          >
            <div className="flex items-center">
              <img
                className="h-24 w-24 max-w-24 mr-2"
                src={obeliskIcon}
                alt="obeliskIcon"
              />
              <span className="text-nowrap">Obelisk DEX</span>
            </div>
          </a>
          <p className="text-lg text-gray-600">
            Obelisk DEX is a decentralizated app with fast transaction
            processing, diverse markets, safety blockchain, in simply and
            user-friendly design. Just trade and take profit!
          </p>
          <div className="mt-8 flex gap-2">
            <p>built on TON</p>
            <img src={Ton} alt="ton icon" />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-32 items-center justify-center">
            <ShinyButton />
            <button className="font-bold">Docs</button>
            <p className="font-bold">Contact us:</p>
          </div>
          <p>dexobelisk@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
