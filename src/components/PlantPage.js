import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(cards => setCards(cards))
  }, [])

  function handleSearch(event){
    setSearch(event.target.value)
  }

  function addNewCard(cardObj){
    setCards([...cards, cardObj])
  }

  const displayedCards = cards.filter((card) => {
    return card.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onCardFormSubmit={addNewCard} cardID={cards.id}/>
      <Search onSearch={handleSearch} />
      <PlantList cards={displayedCards}/>
    </main>
  );
}

export default PlantPage;
