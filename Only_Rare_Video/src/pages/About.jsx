import Navbar from "../components/Navbar";
import { CustomFooter } from "../components/CustomFooter";

function About() {
  return (
    <section className="mainSectionBg">
      <Navbar></Navbar>
      <section className="mt-5 mx-5">
        <h1 className="text-center cssFontNavbarClass navLinkHover">
          ABOUT US
        </h1>
        <div className="mt-5 mb-5 text-center cssFontTextMontserrat ">
          Only Rare Video is a leading independent entertainment distribution
          company, established in 1991. Operating in the UK, the Republic of
          Ireland, United States of America and Canada, Only Rare Video is
          dedicated to supporting upcoming and established filmmakers of dynamic
          new cinema and developing an enviable slate of quality films that
          enjoy a lasting legacy across its award-winning branded labels,
          channels, and platforms. Only Rare Video is also a leading restorer
          and theatrical distributor of classic and cult/horror films. We are
          considered to be one of the global market leader in the Premium Home
          Entertainment market, fuelled by passionate and expert curation,
          aligned with state of the art in-house film restoration - resulting in
          highly sought after bespoke Blu-ray editions of classic, cult and
          horror films, these ever-expanding brands continue to delight their
          growing international fan base with regular interactive live events,
          festival sponsorship and retail stand presence. Our offering extends
          to truly Limited Edition box sets as well as associated spin-off
          products, now including books and vinyl records.
        </div>
      </section>
      <CustomFooter />
    </section>
  );
}

export default About;
