import "./style/Home.css";

import { CollectionBox } from "../components/CollectionBox.jsx";
import { NavbarNEW } from "../components/NavbarNEW";

import { CustomFooter } from "../components/CustomFooter";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

function Collection() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState(null);

  const fetchGetAllCollection = async () => {
    try {
      console.log("starts when loads");
      setIsLoading(true);

      const response = await fetch("http://localhost:8080/api/collection/all");

      if (!response.ok) {
        throw new Error("Something went Wrong! Probably wrong URL!");
      }
      console.log(response);

      const data = await response.json();
      console.log(data);

      const dataMapped = data.map((elem, index) => {
        return {
          collectionName: elem.collectionName,
          sanitizeCollectionName: elem.sanitizeCollectionName,
          collectionDescription: elem.collectionDescription,
          collectionImage: elem.collectionImage,
          movies: elem.movies,
          comingSoon: elem.comingSoon,
        };
      });
      console.log(dataMapped);

      //Filtering the collection I want disaplyed!

      const dataFiltered = dataMapped.filter(
        (elem) => elem.comingSoon == false
      );

      setContent(dataFiltered);
      console.log(content);
    } catch (error) {
      setError(error);
      console.log(error);
    }

    setIsLoading(false);
  };

  //I start this method as page loads!
  useEffect(() => {
    fetchGetAllCollection();
  }, []);

  let final;

  if (isLoading) {
    final = <Loading />;
  }

  // !=null   ---> NOT USING ---> .length > 0

  if (content != null) {
    final = content.map((elem, index) => {
      return <CollectionBox key={index} content={elem} />; //I'm passing "elem" as props for CollectionBox
    });
    console.log(content);
  }

  if (error) {
    final = <Error />;
  }

  return (
    <section className="mainSectionBg">
      <NavbarNEW />
      
      <section className="m-5 d-flex flex-column justify-content-center">
        {final}
      </section>
      <CustomFooter />
    </section>
  );
}

export default Collection;
