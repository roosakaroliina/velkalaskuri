const Playerlist = (props) => {
    return (
      <li>{props.player.name} on pelannut {props.player.hours} tuntia</li>
    )
  }
  
  export default Playerlist