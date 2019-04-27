import React from "react";
import "./style.css";

// function randomizedVillains(villainsArr){
//   console.log(villainsArr)
//  for (let i = villainsArr.length - 1; i > 0; i--) {
//      const j = Math.floor(Math.random() * (i + 1));
//      [villainsArr[i], villainsArr[j]] = [villainsArr[j], villainsArr[i]];
//  }
 
// };
// let randomprops = randomizedVillains(props);

function VillainCard(props) {
  console.log("Dennis", props)
   

  return (
    <div className="card">
      <div className="img-container fade">

        <img 
        alt={props.name} 
        src={props.image} 
        onClick={() => props.randomize(props)} />

      </div>

    </div>
  );
}





export default VillainCard;
