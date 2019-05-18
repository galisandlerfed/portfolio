import React from 'react';
import styled from 'styled-components';
import { lighterBgColor, boardColor } from './Colors';

const Square = ({ playerSign, onClick, className, style }) =>
  <div onClick={onClick} className={className} style={style}>
    {playerSign}
  </div>;

const StyledSquare = styled(Square)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5vw;
  cursor: default;
  border: 1px solid ${boardColor};
  background-color: ${({ playerSign }) => playerSign ? lighterBgColor : "white"}};
  &:hover {
    background-color: ${lighterBgColor};
  }
`;

export default StyledSquare;
