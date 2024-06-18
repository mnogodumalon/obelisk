import React from "react";
import SpeedIcon from "../assets/icons/speed.png";
import Lock from "../assets/icons/Lock.png";
import System from "../assets/icons/System.png";
import Arrows from "../assets/icons/arrows.png";
import ArgumentBg from "../assets/ArgumentBg.png";
import GradientText from "./GradientText";
import BackgroundGlow from "./BackgroundGlow";
import ArgumentBGMobile from "../assets/ArgumentBgMobile.png";

function Benefits() {
  return (
    <div id="benefits" className="max-w-5xl md:pt-32 pt-16">
      <div className="flex items-center flex-col md:gap-6 gap-3 mt-32">
        <h2 className="font-medium text-lg w-[320px] md:w-max text-center md:text-4xl">
          DISCOVER ALL THE BENEFITS OF CONVENIENT TRADING
        </h2>

        <GradientText text="why us?" />
      </div>
      <div className="flex flex-col items-start gap-3 md:mt-16 mt-6 relative flex-wrap">
        <div className=" flex flex-col md:gap-4 gap-2 justify-center items-center p-10 rounded-lg">
          <div className="flex items-center gap-3">
            <h3 className="text-lg md:text-4xl font-medium">
              Fast trade on Telegram
            </h3>
            <img
              src={SpeedIcon}
              alt="SpeedIcon"
              className="w-[18px] md:w-max h-auto"
            />
          </div>
          <p className="w-80 text-center text-gray-600 md:text-base text-sm">
            In Obelisk you can trade right in the Telegram, there is no need for
            websites!
          </p>
        </div>
        <BackgroundGlow direction={false} />
        <img
          src={ArgumentBg}
          alt=""
          className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 "
        />
      </div>

      <div className="flex flex-col items-end gap-3 md:mt-16 mt-6 relative flex-wrap">
        <div className=" flex flex-col gap-4 justify-center items-center p-10 rounded-lg">
          <div className="flex items-center gap-3">
            <h3 className="md:text-4xl text-lg font-medium">Absolute safety</h3>
            <img src={Lock} alt="SpeedIcon" className="md:w-max w-[15px]" />
          </div>
          <p className="w-80 text-center text-gray-600 md:text-base text-sm">
            No one has access to your personal data because of decentralized
            system
          </p>
        </div>
        <BackgroundGlow direction={true} />
        <img
          src={ArgumentBg}
          alt=""
          className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 "
        />
      </div>

      <div className="flex flex-col items-start gap-3 md:mt-16 mt-6 relative flex-wrap">
        <div className=" flex flex-col gap-4 justify-center items-center p-10 rounded-lg">
          <div className="flex items-center gap-3">
            <h3 className="md:text-4xl text-lg font-medium">
              Unique trading system
            </h3>
            <img src={System} alt="SpeedIcon" className="md:w-max w-[18px]" />
          </div>
          <p className="w-80 text-center text-gray-600 md:text-base text-sm">
            Obelisk has the first trading system in DEX to use other users
            orders
          </p>
        </div>
        <BackgroundGlow direction={false} />
        <img
          src={ArgumentBg}
          alt=""
          className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 "
        />
      </div>

      <div className="flex flex-col items-end gap-3 md:mt-16 mt-6 relative flex-wrap">
        <div className=" flex flex-col gap-4 justify-center items-center p-10 rounded-lg">
          <div className="flex items-center gap-3">
            <h3 className="md:text-4xl text-xl font-medium">Diverse markets</h3>
            <img src={Arrows} alt="SpeedIcon" className="md:w-max w-[18px]" />
          </div>
          <p className="w-80 text-center text-gray-600 md:text-base text-sm">
            Obelisk DEX provides a large selection of popular and not-so trading
            pairs
          </p>
        </div>
        <BackgroundGlow direction={true} />
        <img
          src={ArgumentBg}
          alt=""
          className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 "
        />
      </div>
    </div>
  );
}

export default Benefits;
