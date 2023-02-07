import "./style/Card_Home.css";

const Card_Home = ({ title, url }) => {
  //sizes="(max-width: 600px) 100vw, 600px"
  return (
    <li className="col-3">
      <label htmlFor="home_img">{title}</label>
      <img
        className=" img-fluid h-100 w-100 rounded border border-2 hover-overlay ripple shadow-1-strong"
        src={url}
        id="home_img"
        alt={title}
      />
    </li>
  );
};

//col-3 bootstrap no dimensioni fisse

export { Card_Home };
