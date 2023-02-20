import "./style/Media_Query_Coming_Soon.css";

const Card_ComingSoon = ({ image, title, plot }) => {
  return (
    <div className="col-10 col-sm-5 comingSoonCardMQ">
      <img className=" img-fluid h-75  rounded " src={image} alt={title} />
      <div className=" cssFontCollectionTitle">{title}</div>
      <div className=" cssFontCollectionDate">Out on: {plot}</div>
    </div>
  );
};

export { Card_ComingSoon };
