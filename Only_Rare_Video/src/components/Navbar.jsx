import { NavLink } from "react-router-dom";
import Logo from "./Logo";

//We use "NavLink" insted of "Link" to create Link to other pages
//For NavLink to=""  is mandatory--->I will have a link in App.jsx
function Navbar() {
  return (
    <section>
      <header className="p-4 d-flex align-items-center justify-content-around bg-warning ">
        <NavLink to="/about" className="text-decoration-none">
          About
        </NavLink>
        <NavLink to="/collection" className="text-decoration-none">
          Collection
        </NavLink>
        <NavLink to="/" className="text-decoration-none">
          <Logo />
        </NavLink>
        <NavLink to="/comingsoon" className="text-decoration-none">
          Coming Soon
        </NavLink>
        <NavLink to="/offers" className="text-decoration-none">
          Offers
        </NavLink>
      </header>
    </section>
  );

  //All of them are endings wich match a <Route> component in App.jsx--->GO THERE!
}

export default Navbar;
