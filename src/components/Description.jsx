import GradientText from "./GradientText";

function Description() {
  return (
    <div id="description" className="flex flex-col items-center gap-6 pt-64">
      <h2 className="font-medium text-4xl">
        DECENTRALIZATED APP FOR FASTER AND EASILY TRADING
      </h2>
      <GradientText text="what is Obelisk?" />
      <p className="text-gray-600 w-[600px] text-center text-lg">
        Obelisk DEX is a decentralizated app with fast transaction processing,
        diverse markets, safety blockchain, in simply and user-friendly design.
        Just trade and take profit!
      </p>
    </div>
  );
}

export default Description;
