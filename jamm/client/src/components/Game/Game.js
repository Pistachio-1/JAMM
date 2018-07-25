import React, { Component } from 'react';
import _ from "lodash"
import Number from "./Number"
import './game.css';
import axios from "axios";

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
    remainingSeconds: this.props.initialSeconds,
    selectedIds: [],
    coins: 0,
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
    this.viewCoins();
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
    if (sumSelected === this.target) {
      this.addCoins()
    }
    return sumSelected === this.target ? 'won' : 'lost'

  };

  addCoins = () => {
    axios.get("/api/learners/coins/")
      .then(function (response) {
        const plusCoins = response.data.coins + 50;
        // console.log(plusCoins)
        axios.put("/api/learners/update", { coins: plusCoins })
          .then(function (res) {
            if (res.status >= 400) {
              throw new Error("Bad response from server");
            }
            return
          }).catch(function (err) {
            console.log(err)
          });
        })
  }

  viewCoins = () => {
    axios.get("/api/learners/coins")
    .then(function(response){
      sessionStorage.setItem("coins", response.data.coins)
      return sessionStorage.getItem("coins")
    })

  }


  render() {
    const { gameStatus, remainingSeconds } = this.state;
    return (
      <div className="gamecontainer">
        <div className="gamename">
          <h3>Addition Game</h3>
          <h4><i className="fas fa-coins"></i>  Coins: {sessionStorage.getItem("coins")} </h4>

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