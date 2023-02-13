const Card_Collection = ({ title, genre, url, director }) => {
  return (
    <section className="col-2 p-2 mx-2 border border-2 rounded">
      <img
        className="img-overlay img-fluid h-75 w-100 rounded "
        src={url}
        alt={title}
      />

      <div className="cssFontCollection">{title}</div>
      <div className="cssFontCollection">{director}</div>
    </section>
  );
};

export { Card_Collection };
