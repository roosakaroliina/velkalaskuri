import { useState, useEffect } from 'react'
import Player from './components/Player'
import Playerlist from './components/Playerlist'
import GameInfo from './components/GameInfo'
import './index.css'

const App = () => {
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem('players')) || []
  )

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players))
  }, [players])

  const addPlayer = (playerObject) => {
    setPlayers(players.concat({ ...playerObject, id: players.length }))
  }

  const removePlayer = async (player) => {

    if (window.confirm(`Haluatko varmasti poistaa pelaajan ${player.name}?`)) {
      setPlayers(players.filter((b) => b.id !== player.id))

    }
  }
  const reset = () => {
    setPlayers([])
  }
  const style = {
    borderWidth: 1,
    borderRadius: 4,
    color: 'black',
    backgroundColor: 'grey',
    marginTop: 10
  }
  // const mainStyle = {
  //   padding: 20,
  //   paddingTop: 4,
  //   border: 'solid',
  //   borderWidth: 2,
  //   marginBottom: 5

  // }

  return (

    <div>
      <h1>Breikin velkalaskuri</h1>
      <div >
        <Player createPlayer={addPlayer} />
        <ul>
          {players.map(player =>
            <Playerlist key={player.id} player={player} removePlayer={removePlayer} />
          )}

        </ul>
        <GameInfo players={players} />
      </div>
      <br />
      <form onSubmit={reset}>
        <button style={style} type="submit">aloita alusta</button>
      </form>
    </div>
  )
}


export default App