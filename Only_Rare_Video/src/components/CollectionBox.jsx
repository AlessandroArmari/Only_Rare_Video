import { NavLink } from "react-router-dom";

function CollectionBox({ content }) {
  return (
    <section className="container p-2  text-light  rounded cssFontTextMontserrat">
      <section className="row gx-2 border border-2 border-white rounded">
        <img
          className="col-3 p-1 mr-3 img-fluid h-50 w-50  "
          src={content.collectionImage}
          alt=""
        />
        <div className="col-6 d-flex flex-column justify-content-around ">
          <header className="cssFontNavbarClass ">
            {content.collectionName}
          </header>
          <div className="">{content.collectionDescription}</div>
          <NavLink
            state={content}
            to="/singecollection"
            className="col-4 mt-3 mb-1 btn btn-light"
          >
            Go to the deal!
          </NavLink>
        </div>
      </section>
    </section>
  );
}

export { CollectionBox };
