const Playerlist = ({player, removePlayer}) => {
    const style = {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 2,
        paddingRight: 2,
        borderWidth: 1,
        borderRadius: 4,
        color: 'black',
        marginLeft: 4
     }

    return (
        <p>
            <li>{player.name} on pelannut {player.hours} tuntia 
                <button onClick={() => removePlayer(player)} style={style} type="submit">poista</button>
            </li>
        </p>

    )
}

export default Playerlist