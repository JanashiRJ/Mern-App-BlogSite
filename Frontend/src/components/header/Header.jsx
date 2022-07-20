import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Seasonal Flowers</span>

      </div>
      <img
        className= "headerImg"
        src="https://www.securitypology.com/wp-content/uploads/Sakura-tunnel-Miyagi.jpg"
        alt= ""
      />
    </div>
  );
}
