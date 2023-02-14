import { NavLink } from "react-router-dom";

NavLink;

function Logo() {
  return (
    <div className="col-4 p-0 d-flex justify-content-center ">
      <NavLink to="/">
        <img className="" src="src\logo\130x130.png" />
      </NavLink>
    </div>
  );
}

export default Logo;
