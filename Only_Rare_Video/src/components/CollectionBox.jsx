import { NavLink } from "react-router-dom";

function CollectionBox({ content }) {
  return (
    <section className="container p-4  text-light  rounded cssFontTextMontserrat">
      <section className="row align-items-center gx-2 rounded collectionBackGround">
        <img
          className="col-3 p-2 mr-3 img-fluid h-50 w-50 rounded"
          src={content.collectionImage}
          alt=""
        />
        <div className="col-6 px-4 d-flex flex-column align-items-around justify-content-around ">
          <header className="cssFontNavbarClass ">
            {content.collectionName}
          </header>
          <div className="">{content.collectionDescription}</div>
          <NavLink
            state={content}
            to="/singecollection"
            className="col-8 mt-3 mb-1 btn btn-light"
          >
            Go to the deal!
          </NavLink>
        </div>
      </section>
    </section>
  );
}

export { CollectionBox };
