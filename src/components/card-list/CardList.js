import React from "react";
import Card from "../card/Card";

const CardList = ({ kotos }) => {
  return (
    <div>
      {kotos.map((koto) => {
        return (
          <Card
            key={koto.id}
            id={koto.id}
            name={koto.name}
            email={koto.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
