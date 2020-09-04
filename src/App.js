import React from 'react';
import {createGlobalStyle} from 'styled-components';
import { NavBar } from './Components/NavBar';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after{
    box-sizing: inherit;
  }
  body{
    margin: 0;
    background-color: black;
    color: white;
    font-family: Roboto, sens-serif;
    font-size: 20px;
  }
  img{
    max-width: 100%;
    heigth: auto;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h1,h2,h3,h4{
    font-family: Pacifico, sens-serif;
    padding: 0;
    margin: 0;
  }
  p{
    padding: 0;
    margin: 0;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      
    </>
    
  );
}

export default App;
