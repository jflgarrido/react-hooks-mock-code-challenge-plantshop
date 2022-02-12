import React from "react";
import PlantCard from "./PlantCard";

function PlantList({cards}) {

  const displayCards = cards.map((card) => {
    return (
      <PlantCard card={card} key={card.id}/>
    )
  })

  return (
    <ul className="cards">
      {displayCards}
      </ul>
  );
}

export default PlantList;
