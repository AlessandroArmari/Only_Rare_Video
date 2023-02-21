import { NavLink } from "react-router-dom";
import "./style/Media_Query_Card_Home.css";

const Card_Home = ({ title, sanitizeTitle, url, genre, plot }) => {
  //position absolute--->overlay
  //SE PADRE è position relative

  //sizes="(max-width: 600px) 100vw, 600px"

  //+++++WORK IN PROGRESS LINE 19

  return (
    <li className="m-4 p-0 col-10 col-sm-5 col-md-3 col-lg-3 cardHomeMediaQuery">
      {/* PASSING A PROPS VIA NAVLINK*/}

      {/* 1 
      NavLink has a property called "state" which has an object "title"
      
      --->go to SingleMovie.jsx_first line    
      */}
      <NavLink  state={{ sanitizeTitle }} to="/singlemovie">
        <img
          className="img-overlay  img-fluid h-100 rounded border border-2 border-white imageCardHome"
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
