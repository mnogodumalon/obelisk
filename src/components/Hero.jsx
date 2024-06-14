import Logo from "../assets/logo.png";

function Hero() {
  return (
    <div className="hero">
      <img src={Logo} alt="Obilisk Logo" />
      <div>
        <h1>Welcome to Obelisk!</h1>
      </div>
    </div>
  );
}
