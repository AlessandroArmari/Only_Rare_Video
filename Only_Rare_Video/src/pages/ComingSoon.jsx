import { useEffect, useState } from "react";
import { Card_ComingSoon } from "../components/Card_ComingSoon";
import { CustomFooter } from "../components/CustomFooter";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";

import { NavbarNEW } from "../components/NavbarNEW";

function ComingSoon() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [content, setContent] = useState(null);

  async function fetchComingSoon() {
    try {
      setIsLoading(true);

      const response = await fetch(
        "http://localhost:8080/api/collection/collectionname?sanitizeCollectionName=comingsoon"
      );

      const data = await response.json();

      const dataMapped = data.movies.map((elem, index) => {
        return {
          title: elem.title,
          plot: elem.plot,
          image: elem.image,
        };
      });

      setContent(dataMapped);
    } catch (error) {
      setError(error);
      console.log(error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchComingSoon();
  }, []);

  let final = "";
  let finalError = "";

  if (isLoading == true) {
    final = <Loading />;
  }

  if (error) {
    final = <Error />;
  }

  if (content != null) {
    console.log(content);
    final = content.map((elem, index) => {
      return (
        <Card_ComingSoon
          key={index}
          image={elem.image}
          title={elem.title}
          plot={elem.plot}
        />
      );
    });
    console.log(final);
  }

  return (
    <div className="mainSectionBg">
      <section className="mainSectionBg">
        <NavbarNEW></NavbarNEW>

        <section className="mb-5">
          <h2 className="m-5 text-center cssFontNavbarClass">Coming Soon...</h2>
          <div className="container">
            <section className="row gy-5 text-center justify-content-around">
              {final}
            </section>
          </div>
        </section>
      </section>
      <CustomFooter />
    </div>
  );
}

//fetch--->

export default ComingSoon;
