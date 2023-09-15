import Count from "./Count"

const CountDebt = ({ players, totalCost }) => {
    const initialValue = 0
    const totalHours = players.reduce((accumulator, currentValue) => accumulator + Number(currentValue.hours), initialValue)
    console.log("ajat yhteensä", totalHours)
    console.log("pelaajat", players)

    return (
        <div>
            <br />
            Hinta {totalCost} € jaettuna jokaiselle pelaajalle heidän peliajan mukaan:
            {players.map((player) =>
                <Count key={player.id} player={player} totalCost={totalCost} totalHours={totalHours} />)}

        </div>
    )
}

export default CountDebt