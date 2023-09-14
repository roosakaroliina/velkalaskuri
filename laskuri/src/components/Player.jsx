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
                />
                <div>
                    tunnit:
                    <input
                        type="number"
                        value={hours}
                        id="hours"
                        step="0.01"
                        onChange={event => setHours(event.target.value)}
                    />
                </div>
                <button type="submit">lisää pelaaja</button>

            </div>
        </form>
    )
}

export default Player