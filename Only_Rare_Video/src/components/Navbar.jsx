import { NavLink } from "react-router-dom";
import Logo from "./Logo";

//We use "NavLink" insted of "Link" to create Link to other pages
//For NavLink to=""  is mandatory--->I will have a link in App.jsx
function Navbar() {
  return (
    <section>
      <div className="container mw-100 ">
        <header className="row  bg-black align-items-center">
          <NavLink
            to="/about"
            className="col-2 text-white text-decoration-none text-center cssFontNavbarClass"
          >
            About
          </NavLink>
          <NavLink
            to="/collection"
            className="col-2 text-white text-decoration-none text-center cssFontNavbarClass "
          >
            Collection
          </NavLink>
          <Logo className="" />
          <NavLink
            to="/comingsoon"
            className="col-2 text-white text-decoration-none text-center cssFontNavbarClass"
          >
            OUT SOON
          </NavLink>
          <NavLink
            to="/offers"
            className="col-2 text-white text-decoration-none text-center cssFontNavbarClass"
          >
            Offers
          </NavLink>
        </header>
      </div>
    </section>
  );

  //All of them are endings wich match a <Route> component in App.jsx--->GO THERE!
}

export default Navbar;
