import { useState } from 'react'

const Player = ({ createPlayer }) => {
    const [name, setName] = useState('')
    const [hours, setHours] = useState([])

    const addPlayer = (event) => {
        event.preventDefault()
        createPlayer({
            name: name,
            hours: hours
        })
        setName('')
        setHours('')
    }
    return (
        <form onSubmit={addPlayer}>
            <h3>Pelaajan tiedot</h3>
            <div>
                pelaajan nimi:
                <input
                    type="text"
                    value={name}
                    id="name"
                    onChange={event => setName(event.target.value)}
                    required
                />
                
                <div>
                    peliaika:
                    <input
                        type="number"
                        value={hours}
                        id="hours"
                        min={0}
                        step="0.01"
                        onChange={event => setHours(event.target.value)}
                        required
                    />
                     tuntia
                </div>
                <button type="submit">lisää pelaaja</button>

            </div>
        </form>
    )
}

export default Player