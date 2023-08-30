import React, {useState} from "react";

function PlantCard({individualCard,deletePlant}) {

  const {id, name , image , price} = individualCard

  const [stock , setStock] = useState(true)
  const [priceForm, setPriceForm] = useState(true)
  const [newPrice , setNewPrice] = useState(price)

  function updatePrice(card){
    setPriceForm(!priceForm)
    fetch(`http://localhost:6001/plants/${card.id}`,{
      
      Accept: "application/json",
      headers: {
        "Content-Type": "application/json",
      },
      method: 'PATCH',

      body: JSON.stringify({
        price : newPrice
      })
    }
  )}

  console.log(newPrice)


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {priceForm ? 
      <><p>Price: {newPrice}</p> 
      <button onClick={()=>setPriceForm(!priceForm)}>Edit Price</button></>:
      <> 
      <input 
      type='number'
      id="priceform"
      placeholder={newPrice}
      onChange={(e)=>setNewPrice(e.target.value)}
      ></input>
      <button onClick={()=>updatePrice(individualCard)}>Update Price</button>
      </>}
      {stock ? (
        <button className="primary" onClick={()=> setStock(!stock)}>In Stock</button>
      ) : (
        <button onClick={()=> setStock(!stock)}>Out of Stock</button>
      )}
      <button onClick={()=>deletePlant(individualCard)}>Delete</button>
      
    </li>
  );
}

export default PlantCard;
