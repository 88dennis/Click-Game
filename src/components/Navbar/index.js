import React from "react";
import "./style.css";


function Navbar(props) {
    return (

<nav className="navbar">

    <div><a href="/"><p className="par1">Clicky Game</p></a></div>
    
    <div className="clicktobegin"><p className="par1">Click an image to begin!</p></div>
    <div>Score:  {props.score} </div>
    <li>Losses:  {props.losses} </li>
    <li>Max Score:  {props.maxScore} </li>
</nav>

    );
  }
  
  export default Navbar;