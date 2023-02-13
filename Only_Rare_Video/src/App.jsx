import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Collection from "./pages/Collection";
import ComingSoon from "./pages/ComingSoon";
import Home from "./pages/Home";

import { SingleMovie } from "./pages/SingleMovie";
import ToBeChosen from "./pages/ToBeChosen";

// +++REMEMBER--->BROWSER ROUTE IN MAIN.JSX+++

function App() {
  //Here I declare the URL endings wich will re-render .jsx
  //files in the "pages" folder
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/offers" element={<ToBeChosen />} />
        <Route path="/singlemovie" element={<SingleMovie />} />
      </Routes>
    </>
  );
}
//ALWAYS <Routes></Routes> wrapping <Route> component
export default App;
