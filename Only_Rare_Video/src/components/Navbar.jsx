import { NavLink } from "react-router-dom";
import Logo from "./Logo";

//We use "NavLink" insted of "Link" to create Link to other pages
//For NavLink to=""  is mandatory--->I will have a link in App.jsx
function Navbar() {
  return (
    <section>
      <header className="p-4 d-flex align-items-center justify-content-around bg-warning ">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/collection">Collection</NavLink>
        <Logo />
        <NavLink to="/comingsoon">Coming Soon</NavLink>
        <NavLink to="/offers">Offers</NavLink>
      </header>
    </section>
  );

  //All of them are endings wich match a <Route> component in App.jsx--->GO THERE!
}

export default Navbar;
