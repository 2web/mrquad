import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg'
import signImg from '../image/sign.svg'

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
`;

const H1 = styled.h1`
    font-size: 24px;
    /*margin-left: 15px;*/
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.button`
    cursor: pointer;
    background-color: transparent;
    border-color: transparent;
    color: white;
    font-size: 16px;
`;

const ButtonLogin = styled.button`
    box-shadow:inset 0px 1px 0px 0px #fff6af;
	background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
	background-color:#ffec64;
	border-radius:6px;
	border:1px solid #ffaa22;
	display:inline-block;
	color:#333333;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffee66;
    outline: 0;
    :hover{
        background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
	    background-color:#ffab23;
    }
`;

export const NavBar = () => (
    <NavBarStyled>
        <ImgLogo src={logoImg} alt="" />
        <H1>MrQuad's</H1>
        <Login>
            <img src={signImg} alt="Войти" />
            <p>войти</p>
        </Login>
    </NavBarStyled>
)