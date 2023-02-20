import { NavLink } from "react-router-dom";

//---> fixed-bottom ---> to have fotter fixed down

const CustomFooter = () => {
  return (
    <div className="container mw-100 fixed-bottom ">
      <section className="row bg-black align-items-center justify-content-around">
        <div className="col-8 pt-2 pb-2  text-white text-decoration-none text-center cssFontFooter">
          All rights reserved © 2023 Only Rare Video
        </div>
        <div className="col-4 container">
          <div className="row align-items-center ">
            <div className="col-8 container ">
              <div className="row align-items-center justify-content-center">
                <img
                  className="col-2 img-fluid p-1 px-2 "
                  src="src\logo\facebook_icon.png"
                  alt="facebook"
                />
                <img
                  className="col-2 img-fluid p-1  px-2"
                  src="src\logo\instagram_icon.png"
                  alt=""
                />
                <img
                  className="col-2 img-fluid p-1 px-2"
                  src="src\logo\twitter_icon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { CustomFooter };
