import React, { Component } from "react";
import VillainCard from "./components/VillainCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import villains from "./images.json";

console.log(villains)

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
  render() {
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
    // const shuffledVillains = ;

    return (
      
      <Wrapper>
        <Title>Clicky Game</Title>

        {shuffleArray(this.state.villains).map(villain => (
          
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