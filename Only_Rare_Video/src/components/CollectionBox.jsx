function CollectionBox({ content }) {
  return (
    <section className="container p-2 m-5 text-light border border-3 border-white rounded cssFontTextMontserrat">
      <section className="row">
        <img className="col-4" src={content.collectionImage} alt="" />
        <div className="col-8 d-flex flex-column justify-content-around ">
          <header className="cssFontNavbarClass mt-1 mb-3">
            {content.collectionName}
          </header>
          <div className="">{content.collectionDescription}</div>
          <button className="col-4 mt-3 mb-1 btn btn-light">
            Go to the deal!
          </button>
        </div>
      </section>
    </section>
  );
}

export { CollectionBox };
