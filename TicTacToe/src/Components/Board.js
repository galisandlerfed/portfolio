import React from 'react';
import styled from 'styled-components';
import Square from './Square';
import { lighterBgColor, boardColor } from './Colors';

const Board = ({ boardSigns, chooseSquare, size, className, style }) =>
  <div className={className} style={{ ...style, width: size, height: size }}>
    {boardSigns.map((sign, idx) => <Square key={idx} playerSign={sign} onClick={() => chooseSquare(idx)} />)}
  </div>;

const StyledBoard = styled(Board)`
  min-width: 150px;
  min-height: 150px;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  margin: 30px;
  border: 10px solid ${boardColor};
  background-color: ${boardColor};
  border-radius: 5px;
  ${Square} {
    ${({ winningPlayer }) => winningPlayer && { "background-color": lighterBgColor }}
  }
`;

export default StyledBoard;