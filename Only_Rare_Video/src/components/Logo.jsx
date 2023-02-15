import { NavLink } from "react-router-dom";

NavLink;

function Logo() {
  return (
    <div className="col-2 d-flex justify-content-center ">
      <NavLink to="/">
        <img className="img-fluid" src="src\logo\120x95.png" />
      </NavLink>
    </div>
  );
}

export default Logo;
