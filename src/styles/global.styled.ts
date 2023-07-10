import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from './theme/Default'

const { font, colors } = DefaultTheme

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vh;
    overflow-x: hidden;

    font-family: ${font.default};
    color: ${colors.gray7};
    
    background-color: ${colors.card_color2};
  }

  button {
    cursor: pointer;
  }
`
