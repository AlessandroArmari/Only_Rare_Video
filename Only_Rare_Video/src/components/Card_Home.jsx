import { NavLink } from "react-router-dom";
import "./style/Card_Home.css";

const Card_Home = ({ title, sanitizeTitle, url, genre, plot }) => {
  //position absolute--->overlay
  //SE PADRE è position relative

  //sizes="(max-width: 600px) 100vw, 600px"

  //+++++WORK IN PROGRESS LINE 19

  return (
    <li className="col-3">
      {/* PASSING A PROPS VIA NAVLINK*/}

      {/* 1 
      NavLink has a property called "state" which has an object "title"
      
      --->go to SingleMovie.jsx_first line    
      */}
      <NavLink state={{ sanitizeTitle }} to="/singlemovie">
        {console.log(sanitizeTitle)}
        <img
          className="img-overlay img-fluid h-100 w-100 rounded border border-2 border-white "
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
