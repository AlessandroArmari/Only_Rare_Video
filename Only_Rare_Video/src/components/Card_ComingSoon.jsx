const Card_ComingSoon = ({ image, title, plot }) => {
  return (
    <div className="col-6 justify-content-center">
      <img
        className="img-fluid   rounded img-thumbnail"
        src={image}
        alt={title}
      />
      <div className="mt-3 cssFontCollectionTitle">{title}</div>
      <div className="mt-1 cssFontCollectionDirector">Out on: {plot}</div>
    </div>
  );
};

export { Card_ComingSoon };
