import { NavLink } from "react-router-dom";
import "./style/Card_Home.css";

const Card_Home = ({ title, url }) => {
  const toSingleMovie = () => {
    console.log("onclick works");
  };

  //position absolute--->overlay
  //SE PADRE è position relative

  //sizes="(max-width: 600px) 100vw, 600px"
  return (
    <li className="col-3">
      <label htmlFor="home_img">{title}</label>
      <NavLink to="/singlemovie">
        <img
          onClick={toSingleMovie}
          className=" img-fluid h-100 w-100 rounded border border-2 border-white "
          src={url}
          id="home_img"
          alt={title}
        />
      </NavLink>
    </li>
  );
};

//col-3 bootstrap no dimensioni fisse

export { Card_Home };
