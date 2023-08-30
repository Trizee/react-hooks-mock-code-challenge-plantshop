import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantArray, setPlantArray}) {
  

  function deletePlant(card){
    console.log(card.id)
    fetch(`http://localhost:6001/plants/${card.id}`,{
     method: 'DELETE',
    })
    .then(r=>r.json())
    .then(data => setPlantArray(plantArray.filter(plant => plant.id !== card.id)))
  }



  const plantCards = plantArray.map(individualCard => 
  <PlantCard key={individualCard.id} 
  individualCard={individualCard}
  deletePlant={deletePlant}
  />)

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
