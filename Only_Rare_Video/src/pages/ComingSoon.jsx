import { CustomFooter } from "../components/CustomFooter";
import Navbar from "../components/Navbar";

function ComingSoon() {
  return (
    <section className="mainSectionBg">
      <Navbar></Navbar>
      <section className="mt-5">ciao</section>
      <CustomFooter />
    </section>
  );
}

//fetch---> http://localhost:8080/api/collection/collectionname?sanitizeCollectionName=comingsoon

export default ComingSoon;
