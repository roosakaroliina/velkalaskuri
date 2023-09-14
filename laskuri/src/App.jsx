import { useState } from 'react'
import Player from './components/Player'
import Playerlist from './components/Playerlist'
import GameInfo from './components/GameInfo'

const App = () => {
  const [players, setPlayers] = useState([])


  const addPlayer = (playerObject) => {
    setPlayers(players.concat({ ...playerObject, id: players.length }))
  }


  return (
    <div>
      <h2>Breikin velkalaskuri</h2>
      <Player createPlayer={addPlayer} />
      <ul>
        {players.map(player =>
          <Playerlist key={player.id} player={player} />
        )}
        
      </ul>
        <GameInfo players={players} />
    </div>
  )
}


export default App