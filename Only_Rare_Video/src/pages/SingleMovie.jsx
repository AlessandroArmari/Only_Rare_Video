//---->/*2*/ //import React and useLocation

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CustomFooter } from "../components/CustomFooter";
import { Loading } from "../components/Loading";
import Navbar from "../components/Navbar";

const SingleMovie = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [content, setContent] = useState(null);

  /*3 */ //---> useLocation and useEffect
  const location = useLocation();

  React.useEffect(() => {
    console.log("location from new user", location);
  }, []);

  /*4 */ //---> location.state.title is the name
  //---> I'm using it to form the correct URL (WICH IS AN API GETBYNAME)*/

  // CONTROLLA

  const getMovieInfo = async () => {
    try {
      setIsLoading(true);
      console.log(location.state.sanitizeTitle);

      const response = await fetch(
        "http://localhost:8080/api/movie/title?sanitizeTitle=" +
          location.state.sanitizeTitle
      );

      if (!response.ok) {
        throw new Error("Something went wrong! Try it again!");
      }
      const data = await response.json();
      setContent(data[0]);
      //[0]--->DATA IS AN ARRAY made by 1 objecy (0 is the first position)
      console.log(data);

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

  if (isLoading) {
    final = <div> I'm Loading </div>;
  }

  //I do not use content.length because my content isn't an array
  // but a single object!
  if (content != null) {
    final = content;
    console.log(final);
  }

  useEffect(() => {
    getMovieInfo();

    //important: THIS RETURN inside useEffect()---> it activates
    //when function is "dismounted"--->ex. when I refresh or Close the page
    return () => {
      console.log("EVENT ON DISMOUT ");
    };
  }, []);

  return (
    <section className="bg-dark">
      <Navbar></Navbar>
      <section className="container">
        <section className="row mt-5 justify-content-between">
          {isLoading && final}

          <img
            className="col-4 p-0 ms-4 img-fluid rounded border border-2 border-white "
            src={final.image}
            alt=""
          />
          <div className="ps-5 pe-5 col-7 align-self-top text-white  ">
            <div className="mb-3">Title: {final.title}</div>
            <div className="mb-3">+++ERROR+++ {final.title} </div>
            {/* ERROR */}
            <div className="mb-3">Year: {final.year}</div>
            <div className="mb-3">Running time: {final.running_time} min.</div>
            <div className="mb-3">Genre: {final.genre}</div>
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
