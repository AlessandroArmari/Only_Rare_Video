//ROUTE PAGES GO IN ANOTHER FOLDER, not COMPONENT

import { useEffect } from "react";
import Navbar from "../components/Navbar";

function Home() {
  const fetchGetAll = () => {
    console.log("I load when this page is loaded!");
  };

  //I use useEffect to start fetchGetAll() once Home is launched
  //AVOID to use a button or event to trigger a fetch
  useEffect(() => {
    fetchGetAll();
  }, []);

  return (
    <section>
      <Navbar></Navbar>
      <section className="d-flex flex-column align-items-center">
        <div className="m-5">IMAGE will come...</div>
        <div className="m-5">ABOUT will come...</div>
      </section>
    </section>
  );
}

export default Home;
