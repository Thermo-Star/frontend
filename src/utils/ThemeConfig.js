import { useState } from "react";
import { createGlobalStyle } from "styled-components";

const colors = {
  oxfordBlue: "#0A192F",
  tealBlue: "#377B97",
  maxBlue: "#4EACCB",
  caryolaSkyeBlue: "#64DDFF",
  blizzardBlue: "#A8E9F7",
  lightCyan: "#CAEFF3",
  lighterCyan: "#E6F7FA",
  mintCream: "#EBF5EE",
  cluttered: "#EEEEEE",
  lightWhite: "#FEFEFE",
  lighterWhite: "#FCFCFC",
  white: "#FFFFFF",
};

export const theme = {
  colors: colors,
  elementBackground: colors.oxfordBlue,
  background: colors.lightWhite,
  transition: "all 200ms ease-in-out",
  hoverOpacity: 0.7,
  padding: "20px",
  maxWidth: "1400px",
  width: "90%",
  headerHeight: "80px",
};

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colors.oxfordBlue};
    font-family: 'Inter', monospace, Tahoma, Helvetica, Roboto, sans-serif;
    transition: all 200ms linear;
    /* ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.scrollBackground};
    background-color: ${({ theme }) => theme.scrollBackground};
  }

  ::-webkit-scrollbar {
    width: 10px;  
    background-color: lightblue;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: ${({ theme }) => theme.scrollColor}
  } */
  }

  a{
    font-family: 'Inter', monospace, Tahoma, Helvetica, Roboto, sans-serif;
  }

  *{
      padding: 0;
      margin: 0;
  }

  p{
    line-height: 1.5;
  }

`;
