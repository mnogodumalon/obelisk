import BgNumber from "../assets/bgNumber.png";
import React from "react";
import GradientText from "./GradientText";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

function Roadmap() {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.3, // Löst aus, wenn 30% des Containers im Viewport sind
  });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, {
    triggerOnce: true,
    threshold: 0.3, // Löst aus, wenn 30% des Containers im Viewport sind
  });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, {
    triggerOnce: true,
    threshold: 0.3, // Löst aus, wenn 30% des Containers im Viewport sind
  });

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { delay: 0.5, type: "spring", stiffness: 50 },
      });
    }
  }, [controls, isInView]);

  React.useEffect(() => {
    if (isInView2) {
      controls2.start({
        y: 0,
        opacity: 1,
        transition: { delay: 1.5, type: "spring", stiffness: 50 },
      });
    }
  }, [controls2, isInView2]);

  React.useEffect(() => {
    if (isInView3) {
      controls3.start({
        y: 0,
        opacity: 1,
        transition: { delay: 2.5, type: "spring", stiffness: 50 },
      });
    }
  }, [controls3, isInView3]);

  return (
    <div
      id="roadmap"
      className="pt-40 flex flex-col items-center justify-center gap-32"
    >
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-medium text-4xl">ROADMAP</h2>
        <GradientText text="what's our plan?" />
      </div>
      <div className="flex flex-col md:flex-row gap-14 justify-start">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
          ref={ref}
          className="relative flex justify-center rounded-3xl p-px bg-gradient-to-r from-blue-number/50 to-transparent w-[328px] h-[294px]"
        >
          <img
            className="absolute -top-1/2"
            src={BgNumber}
            alt="Number Background"
          />
          <h2 className="absolute -top-[8%] left-[46%] text-5xl text-blue-number">
            1
          </h2>
          <div className="bg-neutral-950 p-5 rounded-3xl border-r-[1px] border-blue-number/20">
            <h2 className="mt-20 text-3xl text-center">Beta test</h2>
            <p className="mt-6 text-gray-600 text-base text-center">
              Beta release of the app for early users. We want to collect
              information about all bugs and implement the most beneficial
              wishes of users
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={controls2}
          ref={ref2}
          className="relative flex justify-center rounded-3xl p-px bg-gradient-to-l from-blue-number/50 to-transparent w-[328px] h-[294px]"
        >
          <img
            className="absolute -top-1/2 md:-bottom-1/2"
            src={BgNumber}
            alt="Number Background"
          />
          <h2 className="absolute -top-[8%] md:-bottom-[8%] left-[46%] text-5xl text-blue-number">
            2
          </h2>
          <div className="bg-neutral-950 py-5 px-[27px] rounded-3xl border-l-[1px] border-blue-number/20">
            <h2 className="mt-20 text-3xl text-center">Analyzing feedback</h2>
            <p className="mt-6 text-gray-600 text-base text-center">
              Functional changes, error work
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={controls3}
          ref={ref3}
          className="relative flex justify-center rounded-3xl p-px bg-gradient-to-r from-blue-number/50 to-transparent w-[328px] h-[294px]"
        >
          <img
            className="absolute -top-1/2"
            src={BgNumber}
            alt="Number Background"
          />
          <h2 className="absolute -top-[8%] left-[46%] text-5xl text-blue-number">
            3
          </h2>
          <div className="bg-neutral-950 py-5 px-[68px] rounded-3xl border-r-[1px] border-blue-number/20">
            <h2 className="mt-20 text-3xl text-center">Mainnet</h2>
            <p className="mt-6 text-gray-600 text-base text-center">
              Official release of the app
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Roadmap;
