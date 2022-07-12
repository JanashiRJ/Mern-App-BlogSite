import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Seasonal Flowers</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className= "headerImg"
        src="https://images.unsplash.com/photo-1554773228-1f38662139db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDAwODk5MXx8ZW58MHx8fHw%3D&w=1000&q=80"
        alt= ""
      />
    </div>
  );
}
