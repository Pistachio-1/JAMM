import React, { Component } from "react";
import Game from "../../components/Game"

class AdditionGame extends Component {
  state = {
    gameId: 1,
  };

  resetGame = () =>
    this.setState((prevState) => ({
      gameId: prevState.gameId + 1,
    }));

  render() {
    return (
      <div>
        <Game
          key={this.state.gameId}
          autoPlay={this.state.gameId > 1}
          challengeSize={6}
          challengeRange={[2, 9]}
          initialSeconds={20}
          onPlayAgain={this.resetGame}
        />
      </div>
    );
  }
}

export default AdditionGame;


