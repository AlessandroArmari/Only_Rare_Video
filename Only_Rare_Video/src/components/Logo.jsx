import { NavLink } from "react-router-dom";

NavLink;

function Logo() {
  return (
    <NavLink to="/" className="d-flex justify-content-center col-4">
      <img className="" src="src\logo\logo-color.png" />
    </NavLink>
  );
}

export default Logo;
