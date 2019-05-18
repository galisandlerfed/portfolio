import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import WinnerAlert from './WinnerAlert';
import Button from './Button';

const X = "X";
const O = "O";

const WINNING_INDXS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const ClearButton = styled(Button)`
  margin: 20px;
`;

class Game extends Component {
  state = {
    boardSigns: new Array(9).fill(null),
    currentPlayer: this.props.isXStart ? X : O,
    winningPlayer: null
  };

  chooseSquare = (idx) => {
    const { boardSigns, currentPlayer, winningPlayer } = this.state;

    if (winningPlayer || boardSigns[idx]) {
      return;
    }

    boardSigns[idx] = currentPlayer;

    this.whoWon();
    this.setState({ boardSigns, currentPlayer: currentPlayer === X ? O : X })
  };

  whoWon = () => {
    const { boardSigns } = this.state;

    const find = WINNING_INDXS.find(winning => {
      const [first, second, third] = winning;

      return boardSigns[first] &&
        boardSigns[first] === boardSigns[second] &&
        boardSigns[second] === boardSigns[third]
    });

    if (find) {
      const [idxFound] = find;
      this.setState({ winningPlayer: boardSigns[idxFound] });
      return boardSigns[idxFound];
    }

    let isFull = true;
    for(let i = 0; i < boardSigns.length; i++){
      if(!boardSigns[i]){
        isFull = false;
      }
    }

    if(isFull){
      this.setState({ winningPlayer: "No One" });
    }
  }

  clearBoard = () => this.setState({
    boardSigns: new Array(9).fill(null),
    currentPlayer: this.props.isXStart ? X : O,
    winningPlayer: null
  });

  render() {
    const { boardSigns, winningPlayer } = this.state;

    return <StyledGame>
      <WinnerAlert winningPlayer={winningPlayer} />
      <Board size="30vw"
        boardSigns={boardSigns}
        winningPlayer={winningPlayer}
        chooseSquare={this.chooseSquare}
      />
      <ClearButton onClick={this.clearBoard}>Restart</ClearButton>
    </StyledGame>
  }
}

export default Game;