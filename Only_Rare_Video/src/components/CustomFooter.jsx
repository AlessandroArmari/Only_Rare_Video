import { NavLink } from "react-router-dom";

//---> fixed-bottom ---> to have fotter fixed down

const CustomFooter = () => {
  return (
    <div className=" mt-4 container mw-100 ">
      <section className="row bg-black align-items-center">
        <div className="pt-2 pb-2 col-6 text-white text-decoration-none text-center cssFontFooter">
          All rights reserved © 2023 Only Rare Video
        </div>
        <div className="col-6 text-white text-decoration-none text-center cssFontFooter ">
          Follow us on:
        </div>
      </section>
    </div>
  );
};

export { CustomFooter };
