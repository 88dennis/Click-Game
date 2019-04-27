import React from "react";
import "./style.css";

function VillainCard(props) {
  console.log("Dennis", props)
  return (
    <div className="card">
      <div className="img-container fade">

        <img 
        alt={props.name} 
        src={props.image} 
        onClick={() => props.handleBtnClick(props.id)} />
      </div>

    </div>
  );
}

export default VillainCard;
