import React from 'react';
import styled from 'styled-components';

const WinnerAlert = ({ winningPlayer, className, style }) => <div className={className} style={style}>
    {winningPlayer} Wins!
</div>;

const WinnerAlertStyle = styled(WinnerAlert)`
    min-height: 55px;
    font-size: 40px;
    display: flex;
    align-items: center;
    ${({ winningPlayer }) => !winningPlayer && { opacity: 0, "font-size": "10px" }};
    transition: font-size 0.5s;
`;

export default WinnerAlertStyle;