import { NavLink } from "react-router-dom";
import "./style/Media_Query_Collection_Box.css";
//container-fluid

function CollectionBox({ content }) {
  return (
    <section className="container-fluid p-4 text-light rounded">
      <section className="row align-items-center gx-2 rounded collectionBackGround ">
        <img
          className="col-12 col-md-5 p-2 img-fluid rounded classImgCollection"
          src={content.collectionImage}
          alt=""
        />
        <div className="col-12 col-md-7 px-4 d-flex flex-column align-items-around justify-content-around ">
          <header className="collectionBoxTitleMQ">
            {content.collectionName}
          </header>
          <div className="collectionBoxDescriptionMQ">
            {content.collectionDescription}
          </div>
          <NavLink
            state={content}
            to="/singecollection"
            className="col-12 col-md-6 btn btn-light collectionBoxButtonMQ"
          >
            Explore
          </NavLink>
        </div>
      </section>
    </section>
  );
}

export { CollectionBox };
