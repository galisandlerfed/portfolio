import styled from 'styled-components';

import {primaryColor, lighterPrimaryColor, darkerPrimaryColor} from './Colors';

const Button = styled.button`
    border-radius: 999px
    border: 1px solid ${primaryColor};
    background-color: ${primaryColor};
    padding: 8px 20px;
    color: white;
    font-size: 16px;
    font-family: sans-serif;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);

    &:hover {
        background-color: ${lighterPrimaryColor};
    }
    &:active {
        outline: 0;
        background-color: ${darkerPrimaryColor};
    } 
    &:focus {
        outline: 0;
    }
`;

export default Button;