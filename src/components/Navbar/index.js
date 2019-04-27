import React from "react";
import "./style.css";


function Navbar(props) {
    return (

<nav className="navbar">

    <div><a href="/"><p className="partitle">Clicky Game</p></a></div>
    
    <div className="clicktobegin"><p className="par1">Click an image to begin!</p></div>
    <div><p className="par1">Score:  {props.score}</p></div>
    <div><p className="par1">Losses:  {props.losses}</p></div>
    <div><p className="par1">Max Score:  {props.maxScore}</p></div>
</nav>

    );
  }
  
  export default Navbar;