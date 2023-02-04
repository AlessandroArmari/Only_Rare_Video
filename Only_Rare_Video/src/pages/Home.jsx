import Navbar from "../components/Navbar";

//ROUTE PAGES GO IN ANOTHER FOLDER, not COMPONENT

function Home() {
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
