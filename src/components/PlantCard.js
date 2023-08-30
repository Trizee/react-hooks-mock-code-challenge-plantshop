import React, {useState} from "react";

function PlantCard({individualCard}) {

  const {name , image , price} = individualCard

  const [stock , setStock] = useState(true)


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={()=> setStock(!stock)}>In Stock</button>
      ) : (
        <button onClick={()=> setStock(!stock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
