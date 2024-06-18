import GradientText from "./GradientText";

function Description() {
  return (
    <div
      id="description"
      className="flex flex-col items-center md:gap-6 gap-3 md:pt-64 pt-32"
    >
      <h2 className="font-medium text-lg w-[320px] md:w-max text-center md:text-4xl">
        DECENTRALIZATED APP FOR FASTER AND EASILY TRADING
      </h2>
      <GradientText text="what is Obelisk?" />
      <p className="text-gray-600 md:w-[600px] mt-10 md:mt-0 text-center text-sm md:text-lg">
        Obelisk DEX is a decentralizated app with fast transaction processing,
        diverse markets, safety blockchain, in simply and user-friendly design.
        Just trade and take profit!
      </p>
    </div>
  );
}

export default Description;
