import { NavLink } from "react-router-dom";

const Card_Collection = ({ title, genre, url, director, sanitizeTitle }) => {
  return (
    <section className="col-2 p-2 mx-2 comingSoonCardMQ">
      <NavLink state={{ sanitizeTitle }} to="/singlemovie">
        <img
          className="img-overlay img-fluid h-75 w-100 rounded"
          src={url}
          alt={title}
        />
      </NavLink>

      <div className="mt-1 cssFontCollectionTitle text-center">{title} </div>
      <div className="mt-2 cssFontCollectionDirector  text-center">
        by {director}
      </div>
    </section>
  );
};

export { Card_Collection };
