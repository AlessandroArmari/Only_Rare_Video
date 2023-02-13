import { NavLink } from "react-router-dom";

function CollectionBox({ content }) {
  return (
    <section className="container p-2 m-5 text-light  rounded cssFontTextMontserrat">
      <section className="row g-5">
        <img
          className="col-4 p-1 mr-3 border border-2 border-white rounded"
          src={content.collectionImage}
          alt=""
        />
        <div className="col-8 d-flex flex-column justify-content-around ">
          <header className="cssFontNavbarClass mt-1 mb-3">
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
