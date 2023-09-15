import { useState } from 'react'
import Player from './components/Player'
import Playerlist from './components/Playerlist'
import GameInfo from './components/GameInfo'
import './index.css'

const App = () => {
  const [players, setPlayers] = useState([])


  const addPlayer = (playerObject) => {
    setPlayers(players.concat({ ...playerObject, id: players.length }))
  }

  const removePlayer = async (player) => {

    if (window.confirm(`Haluatko varmasti poistaa pelaajan ${player.name}?`)) {
      setPlayers(players.filter((b) => b.id !== player.id))

    }
  }

  return (
    <div>
      <h1>Breikin velkalaskuri</h1>
      <Player createPlayer={addPlayer} />
      <ul>
        {players.map(player =>
          <Playerlist key={player.id} player={player} removePlayer={removePlayer} />
        )}

      </ul>
      <GameInfo players={players} />
    </div>
  )
}


export default App