import { NavLink } from "react-router-dom";

NavLink;

function Logo() {
  return (
    <NavLink to="/" className="col-4 d-flex justify-content-center ">
      <img className="" src="src\logo\130x130.png" />
    </NavLink>
  );
}

export default Logo;
