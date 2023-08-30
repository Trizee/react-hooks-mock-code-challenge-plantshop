import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantArray}) {

  const plantCards = plantArray.map(individualCard => <PlantCard key={individualCard.id} individualCard={individualCard}/>)

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
