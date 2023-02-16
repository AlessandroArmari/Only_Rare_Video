import { NavLink } from "react-router-dom";

//---> fixed-bottom ---> to have fotter fixed down

const CustomFooter = () => {
  return (
    <div className=" mt-4 container mw-100 ">
      <section className="row bg-black align-items-end justify-content-around">
        <div className="col-6 pt-2 pb-2  text-white text-decoration-none text-center cssFontFooter">
          All rights reserved © 2023 Only Rare Video
        </div>
        <div className="col-4  d-flex justify-content-end align-items-center">
          {/* add anoter grid here */}
          <div className="text-white text-decoration-none text-center cssFontFooter ">
            Follow us on:
          </div>
          <div className="container">
            <div className="row justify-content-around">
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
      </section>
    </div>
  );
};

export { CustomFooter };
