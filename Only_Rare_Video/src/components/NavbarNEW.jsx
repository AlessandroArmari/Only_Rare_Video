import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";

Logo;
const NavbarNEW = () => {
  return (
    <section>
      <nav className="p-0 navbar navbar-expand-sm  bg-black cssFontNavbarClass">
        <Logo></Logo>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active mx-4 ">
              <NavLink
                className=" nav-link text-white text-decoration-none text-center cssFontNavbarClass"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item active mx-4">
              <NavLink
                className="nav-link text-white text-decoration-none text-center cssFontNavbarClass"
                to="/collection"
              >
                Collection
              </NavLink>
            </li>
            <li className="nav-item active mx-3 ">
              <NavLink
                className="nav-link text-white text-decoration-none text-center cssFontNavbarClass"
                to="/comingsoon"
              >
                Out Soon
              </NavLink>
            </li>
            <li className="nav-item active mx-4">
              <NavLink
                className="nav-link text-white text-decoration-none text-center cssFontNavbarClass"
                to="/newsletter"
              >
                NewsLetter
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export { NavbarNEW };
