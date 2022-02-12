import React, {useState} from "react";

function PlantCard({card}) {
  const [inStock, setInStock] = useState(false)
  const {id, name, image, price} = card
  return (
    <li className="card" key={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button 
          onClick={() => setInStock(false)}
          className="primary">In Stock</button>
      ) : (
        <button
          onClick={() => setInStock(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
