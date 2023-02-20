import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Collection from "./pages/Collection";
import ComingSoon from "./pages/ComingSoon";
import Home from "./pages/Home";
import { SingleCollection } from "./pages/SingleCollection";
import { SingleMovie } from "./pages/SingleMovie";
import ToBeChosen from "./pages/Newsletter";
import { NavbarNEW } from "./components/NavbarNEW";

// +++REMEMBER--->BROWSER ROUTE IN MAIN.JSX+++

function App() {
  //Here I declare the URL endings wich will re-render .jsx
  //files in the "pages" folder
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* USING OUTLET 
        when I go to /about--->re-render Navbar+children--->About

        Go to Navbar class and search for <Outlet>
        */}
        <Route
          element={<NavbarNEW />}
          children={<Route path="/about" element={<About />} />}
        />

        <Route path="/collection" element={<Collection />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/newsletter" element={<ToBeChosen />} />
        <Route path="/singlemovie" element={<SingleMovie />} />
        <Route path="/singecollection" element={<SingleCollection />} />
      </Routes>
    </>
  );
}
//ALWAYS <Routes></Routes> wrapping <Route> component
export default App;
