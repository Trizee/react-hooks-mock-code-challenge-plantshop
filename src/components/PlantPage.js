import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantArray , setPlantArray] = useState([])
  const [search, setSearch] = useState('')

  const plantsToDisplay = plantArray.filter(plants => {
    return plants.name.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plants => setPlantArray(plants))
  },[])

  function handleSubmit(e){
    e.preventDefault()
    const newPlant = {
      name: e.target.name.value,
      iamage: e.target.image.value,
      price: e.target.price.value,
    }
    fetch('http://localhost:6001/plants',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then(r => r.json())
    .then(newData => setPlantArray([...plantArray, newData]))
  }

  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit}/>
      <Search setSearch={setSearch}/>
      <PlantList plantArray={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
