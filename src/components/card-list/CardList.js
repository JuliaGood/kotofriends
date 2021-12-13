import React from "react";
import Card from "../card/Card";

const CardList = ({ kotos }) => {
  // const {kotos} = props
  return (
    <div>
      {kotos.map((koto, i) => {
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
