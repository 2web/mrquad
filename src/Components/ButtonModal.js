import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    padding: 20px;
    width: 250px;
    color: #FFF;
    background: #299B01;
    border: none;
    margin-left: -125px;
`;

const ButtonArea = styled.div`
    position: absolute;
    left: 50%;
    bottom: 43px;
`;

export const ButtonModal = () => {

    return (
        <ButtonArea>
            <Button>Добавить</Button>
        </ButtonArea>
    )
};