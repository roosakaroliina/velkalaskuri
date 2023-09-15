
const Count = ({ player, totalCost, totalHours }) => {
    const style = {
        paddingTop: 10,
        paddingLeft: 7,
        border: 'groove',
        borderWidth: 1,
        marginBottom: 5
    }
    const counter = (player.hours / totalHours) * totalCost
    return (
        <div style={style}>
             {player.name} on velkaa {counter.toFixed(2)} €
        </div>
    )
}
export default Count