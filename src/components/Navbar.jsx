import obeliskIcon from "../assets/obelisk-icon.png";
import BackgroundStars from "./BackgroundStars";

function Navbar() {
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex gap-36 items-center">
            {/* Navbar items */}
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
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded font-normal text-xl"
            >
              EXPLORE
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded font-normal text-xl"
            >
              ROADMAP
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded font-normal text-xl"
            >
              PARTNERSHIPS
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded font-normal text-xl"
            >
              SOCIALS
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded font-normal text-xl"
            >
              DOCS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
