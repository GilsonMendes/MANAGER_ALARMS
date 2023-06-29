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
    font-family: ${font.default};
    color: ${colors.gray7};
    
    background-color: ${colors.gray1};
  }
`
