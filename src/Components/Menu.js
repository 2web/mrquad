import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import {ListItem} from './ListItem';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;


const Banner = styled.a`
    display: block;
    margin-bottom: 0px;
    background: url('/menu/banner.png') no-repeat center center;
    background-size: cover;
    height: 210px;
`;

export const Menu = () => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other}/>
        </SectionMenu>
    </MenuStyled>
);