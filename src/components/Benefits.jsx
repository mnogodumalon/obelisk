import React from "react";
import SpeedIcon from "../assets/icons/speed.png";
import Lock from "../assets/icons/Lock.png";
import System from "../assets/icons/System.png";
import Arrows from "../assets/icons/arrows.png";
import ArgumentBg from "../assets/ArgumentBg.png";

function Benefits() {
  return (
    <div className="max-w-5xl mt-12">
      <div className="flex items-center flex-col gap-6 mt-32">
        <h2 className="font-medium text-4xl">
          DISCOVER ALL THE BENEFITS OF CONVENIENT TRADING
        </h2>

        <h3 className="font-medium text-base bg-gradient-to-r from-blue-600 to-teal-300 bg-clip-text text-transparent">
          {">"}why us?
        </h3>
      </div>
      <div className="flex flex-col items-start gap-3 mt-16 relative flex-wrap">
        <div className=" flex flex-col gap-4 justify-center items-center p-10 rounded-lg">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-medium">Fast trade on Telegram</h3>
            <img src={SpeedIcon} alt="SpeedIcon" />
          </div>
          <p className="w-80 text-center text-gray-600 text-base">
            In Obelisk you can trade right in the Telegram, there is no need for
            websites!
          </p>
        </div>
        <img
          src={ArgumentBg}
          className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          alt=""
        />
      </div>

      <div className="flex flex-col items-end gap-3 mt-16 relative flex-wrap">
        <div className=" flex flex-col gap-4 justify-center items-center p-10 rounded-lg">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-medium">Absolute safety</h3>
            <img src={Lock} alt="SpeedIcon" />
          </div>
          <p className="w-80 text-center text-gray-600 text-base">
            No one has access to your personal data because of decentralized
            system
          </p>
        </div>
        <img
          src={ArgumentBg}
          className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          alt=""
        />
      </div>

      <div className="flex flex-col items-start gap-3 mt-16 relative flex-wrap">
        <div className=" flex flex-col gap-4 justify-center items-center p-10 rounded-lg">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-medium">Unique trading system</h3>
            <img src={System} alt="SpeedIcon" />
          </div>
          <p className="w-80 text-center text-gray-600 text-base">
            Obelisk has the first trading system in DEX to use other users
            orders
          </p>
        </div>
        <img
          src={ArgumentBg}
          className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          alt=""
        />
      </div>

      <div className="flex flex-col items-end gap-3 mt-16 relative flex-wrap">
        <div className=" flex flex-col gap-4 justify-center items-center p-10 rounded-lg">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-medium">Diverse markets</h3>
            <img src={Arrows} alt="SpeedIcon" />
          </div>
          <p className="w-80 text-center text-gray-600 text-base">
            Obelisk DEX provides a large selection of popular and not-so trading
            pairs
          </p>
        </div>
        <img
          src={ArgumentBg}
          className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          alt=""
        />
      </div>
    </div>
  );
}

export default Benefits;
