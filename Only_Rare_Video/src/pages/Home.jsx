//ROUTE PAGES GO IN ANOTHER FOLDER, not COMPONENT
import { useEffect, useState } from "react";
import { Card_Home } from "../components/Card_Home";
import { CustomFooter } from "../components/CustomFooter";
import { List } from "../components/List";

import Navbar from "../components/Navbar";

function Home() {
  //I use useEffect to start fetchGetAll() once Home is launched
  //AVOID to use a button or event to trigger a fetch

  const [error, setError] = useState(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(null);

  const fetchGetAll = async () => {
    console.log("I start when page loads");

    try {
      const response = await fetch("http://localhost:8080/api/movie/all");

      if (!response.ok) {
        throw new Error("Something went Wrong! Probably wrong URL!");
      }
      console.log(response);

      const data = await response.json();
      console.log(data);

      const dataMapped = data.map((elem, index) => {
        return { title: elem.title, url: elem.image };
      });
      console.log(dataMapped);
      setContent(dataMapped);
      console.log(content); //Here I AM NOT FILLED!
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  let final = <div>sooo</div>;

  if (content.length > 0) {
    console.log(content); //Here I AM FILLED!
    final = <List content={content} />; //metti props
  }

  //This useEffect to load when page loads!
  useEffect(() => {
    fetchGetAll();
  }, []);

  return (
    <section>
      <Navbar></Navbar>
      <section className="mt-5">{final}</section>
      <CustomFooter />
    </section>
  );
}

export default Home;
