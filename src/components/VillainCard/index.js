import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container fade">
        <img alt={props.name} src={props.image} onClick={() => props.removeFriend(props.id)} />
        
      </div>


        

    </div>
  );
}




export default FriendCard;
