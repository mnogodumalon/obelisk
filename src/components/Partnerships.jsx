import Link from "../assets/icons/link.png";

function Partnerships() {
  return (
    <div className="mt-44 flex flex-col items-center gap-6">
      <h2 className="font-medium text-4xl">PARTNERSHIPS</h2>
      <p className="text-gray-600 text-lg text-center w-[600px]">
        We’re open to cooperation and mutual support between new projects and
        those that have already proven themselves to be the best. Below is the
        feedback form, fill it out if you are ready to become our partner
      </p>
      <button className=" mt-2 flex items-center font-semibold text-lg px-24 py-5 rounded-full bg-blackish text-white shadow-glow relative border-thin border-gray-700">
        Become our partner
        <img className="ml-4" src={Link} alt="Link icons" />
      </button>
    </div>
  );
}

export default Partnerships;
