
const Count = ({ a, info, totalHours }) => {
    const style = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
      }
    const counter = (a.hours / totalHours) * info
    return (
        <div style={style}>
                {a.name} on velkaa {counter.toFixed(2)} €
        </div>
    )
}

const CountDebt = ({ players, info }) => {
    const initialValue = 0
    const totalHours = players.reduce((accumulator, currentValue) => accumulator + Number(currentValue.hours), initialValue)
    console.log("ajat yhteensä", totalHours)
    console.log("pelaajat", players)

    return (
        <div>
            <ul>
                Hinta {info} € jaettuna jokaiselle pelaajalle heidän peliajan mukaan:
                {players.map((a) =>
                    <Count key={a.id} a={a} info={info} totalHours={totalHours} />)}
            </ul>

        </div>
    )
}

export default CountDebt