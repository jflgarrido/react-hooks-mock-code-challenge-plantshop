import React, {useState} from "react";

function NewPlantForm({onCardFormSubmit, cardID}) {
  const [cardName, setCardName] = useState("")
  const [cardImage, setCardImage]= useState("")
  const [cardPrice, setCardPrice] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    fetch("http://localhost:6001/plants", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": cardName,
        "image": cardImage,
        "price": cardPrice
      })
    })
    .then(r => r.json())
    .then((newCard) => onCardFormSubmit(newCard)) 
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" 
          value={cardName} onChange={(e) => setCardName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL"
          value={cardImage} onChange={(e) => setCardImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price"
          value={cardPrice} onChange={(e) => setCardPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
