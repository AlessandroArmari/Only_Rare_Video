import { useEffect, useState } from "react";
import { Card_Home } from "./Card_Home";

const List = ({ content }) => {
  return (
    <section className="container">
      <ul className="row justify-content-center mt-4 list-unstyled gy-5 ">
        {content.map((elem, index) => {
          return (
            <Card_Home
              key={index}
              url={elem.url}
              title={elem.title}
              sanitizeTitle={elem.sanitizeTitle}
              genre={elem.genre}
            />
          );
        })}
      </ul>
    </section>
  );
};

export { List };
