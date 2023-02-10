import { useEffect, useState } from "react";
import { Card_Home } from "./Card_Home";

const List = ({ content }) => {
  return (
    <section className="container">
      <ul className="row list-unstyled gy-4">
        {content.map((elem, index) => {
          return (
            <Card_Home
              key={index}
              url={elem.url}
              title={elem.title}
              sanitizeTitle={elem.sanitizeTitle}
            />
          );
        })}
      </ul>
    </section>
  );
};

export { List };
