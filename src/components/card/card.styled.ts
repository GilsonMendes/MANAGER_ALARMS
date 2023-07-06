import { css, keyframes, styled } from 'styled-components'
import { DefaultTheme } from '../../styles/theme/Default'

const { colors, border } = DefaultTheme

const Warning = keyframes`
  50% {
    box-shadow: 0px 0px 15px 10px rgb(240, 56, 71, 0.38);
  }
`
interface CardType {
  warning: boolean
}

export const CardStyled = styled.div<CardType>`
  width: 100%;
  height: 100%;

  background-color: ${colors.card_color1};
  border-radius: ${border.boxBorderRadius + 'px'};
  border: ${border.borderWidth + 'px'} solid transparent;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.38);

  ${(props) =>
    props.warning
      ? css`
          animation: ${Warning} infinite 1s ease-in-out;
          border: ${border.borderWidth + 'px'} solid ${colors.red};
        `
      : ''}
`
