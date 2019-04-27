import React, { Component } from "react";
import VillainCard from "./components/VillainCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import villains from "./images.json";
console.log(villains)

//shuffle array
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    villains,
    clicked: false,
    score: 0,
    losses: 0,
    guesses:[],
    maxScore: 0
  };

  handleBtnClick = villainId => {
    const newState = {...this.state};
    //cloning the old state
    //creating new state

    if(newState.guesses.includes(villainId)) {
      console.log("you lose");
      newState.losses = newState.losses + 1;
      newState.guesses = [];   
      newState.score = 0; 
    }
    else
    { newState.score = newState.score + 1;
      newState.guesses.push(villainId);
    }
    newState.villains = shuffleArray(newState.villains);
    //copying the array

    if(newState.score > newState.maxScore) { newState.maxScore = newState.score}
    
    this.setState(newState);
  };
  render() {
    return (
      <div>
      <Navbar 
      score = {this.state.score}
      losses = {this.state.losses}
      maxScore = {this.state.maxScore}>
      </Navbar>
      <Wrapper>
        {this.state.villains.map(villain => (
          <VillainCard
            handleBtnClick={this.handleBtnClick}
            id={villain.id}
            key={villain.id}
            name={villain.name}
            image={villain.image}
          />
        ))}
      </Wrapper>

      </div>
    );
  }
}
export default App;