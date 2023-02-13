const Card_Collection = ({ title, genre, url }) => {
  return (
    <section>
      <div>Title: {title}</div>
      <div>Genre: {genre}</div>
      <img src={url} alt={title} />
    </section>
  );
};

export { Card_Collection };
