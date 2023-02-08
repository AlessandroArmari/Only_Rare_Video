import { useEffect, useState } from "react";

import { CustomFooter } from "../components/CustomFooter";
import Navbar from "../components/Navbar";

const SingleMovie = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [content, setContent] = useState(null);

  const getMovieInfo = async () => {
    try {
      setIsLoading(true);
      console.log("I'm the single-movie-fetch!");

      const response = await fetch(
        "http://localhost:8080/api/movie/title?title=the happening"
      );

      if (!response.ok) {
        throw new Error("Something went wrong! Try it again!");
      }
      const data = await response.json();
      setContent(data);

      /*
        I DO NOT USE .map because data is a single Object, not an array---> 
        this api returns a movie by title--->
        ONLY ONE, NOT MANY!
      */
    } catch (error) {
      setError(error);
      console.log(error);
    }
    setIsLoading(false);
  };

  let final = "";

  //I do not use content.length because my content isn't an array
  // but a single object!
  if (content != null) {
    final = content;
    console.log(final);
  }

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <section className="bg-dark">
      <Navbar></Navbar>
      <section className="container">
        <section className="row mt-5">
          <img
            className="col-4 img-fluid  "
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Happening_poster.jpg/220px-Happening_poster.jpg"
            alt=""
          />
          <div className="p-2 col-8 align-self-top text-white rounded border border-2 border-white">
            <div className="mb-3">Title: {final.title}</div>
            <div className="mb-3">Director: {final.director.fullName} </div>
            {/* ERROR */}
            <div className="mb-3">Year: {final.year}</div>
            <div className="mb-3">Running time: {final.running_time}</div>
            <div className="mb-3">Plot: {final.plot}</div>
            {/* HERE I'M POINTING THE full property in the object director in the object final */}
          </div>
        </section>
      </section>
      <CustomFooter />
    </section>
  );
};

export { SingleMovie };
