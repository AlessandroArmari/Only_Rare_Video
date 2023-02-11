import "./style/Home.css";

import { CollectionBox } from "../components/CollectionBox.jsx";
import Navbar from "../components/Navbar";
import { CustomFooter } from "../components/CustomFooter";

function Collection() {
  return (
    <section className="mainSectionBg">
      <Navbar />
      <section className="d-flex flex-column justify-content-center">
        <CollectionBox></CollectionBox>
        <CollectionBox></CollectionBox>
        <CollectionBox></CollectionBox>
        <CollectionBox></CollectionBox>
      </section>
      <CustomFooter />
    </section>
  );
}

export default Collection;
