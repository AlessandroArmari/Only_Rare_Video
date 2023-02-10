import { NavLink } from "react-router-dom";
import Logo from "./Logo";

//We use "NavLink" insted of "Link" to create Link to other pages
//For NavLink to=""  is mandatory--->I will have a link in App.jsx
function Navbar() {
  return (
    <section>
      <div className="container">
        <header className=" row p-4 bg-warning align-items-center  ">
          <NavLink to="/about" className="col-2 text-decoration-none ">
            About
          </NavLink>
          <NavLink to="/collection" className="col-2 text-decoration-none ">
            Collection
          </NavLink>
          <Logo className="" />
          <NavLink to="/comingsoon" className="col-2 text-decoration-none">
            Coming Soon
          </NavLink>
          <NavLink to="/offers" className="col-2 text-decoration-none">
            Offers
          </NavLink>
        </header>
      </div>
    </section>
  );

  //All of them are endings wich match a <Route> component in App.jsx--->GO THERE!
}

export default Navbar;
