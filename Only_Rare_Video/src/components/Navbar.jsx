import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";

//We use "NavLink" insted of "Link" to create Link to other pages
//For NavLink to=""  is mandatory--->I will have a link in App.jsx

//className="sticky-top"---> to fix navbar

function Navbar() {
  return (
    <section className="sticky-top">
      <div className=" container mw-100 mainSectionBg ">
        <header className="row bg-black align-items-center">
          <NavLink
            to="/about"
            className="col-3 text-white text-decoration-none text-center cssFontNavbarClass "
          >
            <div className="navLinkHover">About</div>
          </NavLink>
          <NavLink
            to="/collection"
            className="col-2 text-white text-decoration-none text-center cssFontNavbarClass "
          >
            <div className="navLinkHover">Collection</div>
          </NavLink>
          <Logo className="" />
          <NavLink
            to="/comingsoon"
            className="col-2 text-white text-decoration-none text-center cssFontNavbarClass"
          >
            <div className="navLinkHover">Out Soon</div>
          </NavLink>
          <NavLink
            to="/newsletter"
            className="col-3 text-white text-decoration-none text-center cssFontNavbarClass"
          >
            <div className="navLinkHover">Newsletter</div>
          </NavLink>
        </header>

        {/* In outlet you will have component about */}

        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );

  //All of them are endings wich match a <Route> component in App.jsx--->GO THERE!
}

export default Navbar;
