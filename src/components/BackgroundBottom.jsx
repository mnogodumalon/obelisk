import BackgroundPattern2 from "../assets/bg-pattern2.png";

function BackgroundBottom() {
  return (
    <div className="hidden md:block absolute bottom-[0%]">
      <img src={BackgroundPattern2} alt="" />
    </div>
  );
}

export default BackgroundBottom;
