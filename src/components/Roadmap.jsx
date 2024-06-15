import BgNumber from "../assets/bgNumber.png";

function Roadmap() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center gap-32">
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-medium text-4xl">ROADMAP</h2>
        <h3 className="font-medium text-base bg-gradient-to-r from-blue-600 to-teal-300 bg-clip-text text-transparent">
          {">"}what's our plan?
        </h3>
      </div>
      <div className="flex gap-14 justify-start">
        <div className="relative flex justify-center rounded-3xl p-px bg-gradient-to-r from-blue-number/50 to-transparent w-[328px] h-[294px]">
          <img
            className="absolute -top-1/2"
            src={BgNumber}
            alt="Number Background"
          />
          <h2 className="absolute -top-[8%] left-1/2 text-5xl text-blue-number">
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
        </div>

        <div className="relative flex justify-center rounded-3xl p-px bg-gradient-to-l from-blue-number/50 to-transparent w-[328px] h-[294px]">
          <img
            className="absolute -bottom-1/2"
            src={BgNumber}
            alt="Number Background"
          />
          <h2 className="absolute -bottom-[8%] left-1/2 text-5xl text-blue-number">
            2
          </h2>
          <div className="bg-neutral-950 py-5 px-[27px] rounded-3xl border-l-[1px] border-blue-number/20">
            <h2 className="mt-20 text-3xl text-center">Analyzing feedback</h2>
            <p className="mt-6 text-gray-600 text-base text-center">
              Functional changes, error work
            </p>
          </div>
        </div>

        <div className="relative flex justify-center rounded-3xl p-px bg-gradient-to-r from-blue-number/50 to-transparent w-[328px] h-[294px]">
          <img
            className="absolute -top-1/2"
            src={BgNumber}
            alt="Number Background"
          />
          <h2 className="absolute -top-[8%] left-1/2 text-5xl text-blue-number">
            3
          </h2>
          <div className="bg-neutral-950 py-5 px-[68px] rounded-3xl border-r-[1px] border-blue-number/20">
            <h2 className="mt-20 text-3xl text-center">Mainnet</h2>
            <p className="mt-6 text-gray-600 text-base text-center">
              Official release of the app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
