const Card_Home = ({ title, url }) => {
  //sizes="(max-width: 600px) 100vw, 600px"
  return (
    <li className="col-3">
      <div className="">
        <label htmlFor="home_img">{title}</label>
        <img src={url} id="home_img" alt={title} width="200" height="300" />
      </div>
    </li>
  );
};

//col-3 bootstrap no dimensioni fisse

export { Card_Home };
