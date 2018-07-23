import React, { Component } from 'react';
import _ from "lodash"
import Number from "./Number"
import './game.css';

const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Game extends Component {
  static bgColors = {
    playing: '#ffff',
    won: '#30D100',
    lost: '#E83B2C',
  };

  state = {
    gameStatus: 'new',
    round: 0,
    remainingSeconds: this.props.initialSeconds,
    selectedIds: [],
  };

  challengeNumbers = Array
    .from({ length: this.props.challengeSize })
    .map(() => randomNumberBetween(...this.props.challengeRange));

  target = _.sampleSize(
    this.challengeNumbers,
    this.props.challengeSize - 2
  ).reduce((acc, curr) => acc + curr, 0);

  componentDidMount() {
    if (this.props.autoPlay) {
      this.startGame();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startGame = () => {
    this.setState({ gameStatus: 'playing' }, () => {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => {
          const newRemainingSeconds = prevState.remainingSeconds - 1;
          if (newRemainingSeconds === 0) {
            clearInterval(this.intervalId);
            return { gameStatus: 'lost', remainingSeconds: 0 };
          }
          return { remainingSeconds: newRemainingSeconds };
        });
      }, 1000);
    });
  };

  isNumberAvailable = (numberIndex) =>
    this.state.selectedIds.indexOf(numberIndex) === -1;

  selectNumber = (numberIndex) => {
    if (this.state.gameStatus !== 'playing') {
      return;
    }
    this.setState(
      (prevState) => ({
        selectedIds: [...prevState.selectedIds, numberIndex],
        gameStatus: this.calcGameStatus([
          ...prevState.selectedIds,
          numberIndex,
        ]),
      }),
      () => {
        if (this.state.gameStatus !== 'playing') {
          clearInterval(this.intervalId);
        }
      }
    );
  };

  calcGameStatus = (selectedIds) => {
    const sumSelected = selectedIds.reduce(
      (acc, curr) => acc + this.challengeNumbers[curr],
      0
    );
    if (sumSelected < this.target) {
      return 'playing';
    }
    return sumSelected === this.target ? 'won' : 'lost';
  };

  render() {
    const { gameStatus, remainingSeconds } = this.state;
    return (
      <div className="gamecontainer">
          <div className="gamename">
            <h3>Addition Game</h3>
            
          </div>
        <div className="game">
          <div
            className="target"
            style={{ backgroundColor: Game.bgColors[gameStatus] }}
          >
            {gameStatus === 'new' ? '?' : this.target}
          </div>
          <div className="challenge-numbers">
            {this.challengeNumbers.map((value, index) => (
              <Number
                key={index}
                id={index}
                value={gameStatus === 'new' ? '?' : value}
                clickable={this.isNumberAvailable(index)}
                onClick={this.selectNumber}
              />
            ))}
          </div>
          <div className="footer">
            {gameStatus === 'new' ? (
              <button className="gamebutton" onClick={this.startGame}>Start</button>
            ) : (
                <div className="timer-value">{remainingSeconds}</div>
              )}
            {['won', 'lost'].includes(gameStatus) && (
              <button className="gamebutton" onClick={this.props.onPlayAgain}>Play Again</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;