import React, { Component } from "react";
import VillainCard from "./components/VillainCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import villains from "./images.json";

console.log(villains)


// function randomize(arr){
//   for (let i = arr.length - 1; i > 0; i--) {
//          const j = Math.floor(Math.random() * (i + 1));
//          [arr[i], arr[j]] = [arr[j], arr[i]];
//      }
      
// }
// let newArr = randomize(villains)

// console.log(newArr)

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    villains,
    clicked: false,
    score: 0,
    losses: 0,
    guesses: 0
  };


  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const villains = this.state.villains.filter(villain => villain.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ villains });  
  // };


  // Randomizer = ()) => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const newvillains = this.state.villains;


  //    
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    return (
      <Wrapper>
        <Title>Clicky Game</Title>

        {this.state.villains.map(villain => (
          
          <VillainCard
            removeFriend={this.removeFriend}
            id={villain.id}
            key={villain.id}
            name={villain.name}
            image={villain.image}
          />
          
        ))}
      </Wrapper>
    );
  }
}


export default App;
