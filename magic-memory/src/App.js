import { useState } from 'react'
import './App.css'

const cartImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" }
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {

    //duplicar o numero de objetos para o jogo de memória!
    const shuffledCards = [...cartImages, ...cartImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              <img className='front' src={card.src} alt='card front'/>
              <img className='back' src="/img/cover.png" alt='card back'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App