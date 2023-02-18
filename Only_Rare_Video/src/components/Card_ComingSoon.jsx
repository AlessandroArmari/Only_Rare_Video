const Card_ComingSoon = ({ image, title, plot }) => {
  return (
    <div className="col-6 ">
      <img className="mt-4 img-fluid h-75 rounded " src={image} alt={title} />
      <div className="mt-3 cssFontCollectionTitle">{title}</div>
      <div className="mt-1 cssFontCollectionDirector">Out on: {plot}</div>
    </div>
  );
};

export { Card_ComingSoon };
