import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <span className="x-wins">X : 0</span>
      <span className="y-wins">Y : 0</span>
      <span className="turn">X : turn</span>
    </div>
  );
};

export default Header;
