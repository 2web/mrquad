import React from 'react';
import styled from 'styled-components';

export const ButtonModal = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    height: 60px;
    width: 250px;
    display: block;
    margin: 0 auto;
    color: #FFF;
    background: #299B01;
    border: 2px solid #299B01;
    transition-property: color, backgroud-color, border-color;
    transition-duration: .3s;
    &:hover{
        background-color: #fff;
        color: #299B01;
        border-color: #299B01;
    }
`;