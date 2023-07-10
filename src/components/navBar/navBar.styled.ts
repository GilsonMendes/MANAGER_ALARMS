import { css, keyframes, styled } from 'styled-components'
import { DefaultTheme } from '../../styles/theme/Default'

const { colors, fontSize } = DefaultTheme

const popAnin = keyframes`
  0% {
    transform: translateY(+10px);
  }
  100% {
    transform: translateY(0);
  }
`

export const NavContainerStyled = styled.nav`
  width: 100%;
  height: 70px;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${colors.card_color3};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem 0 1rem;

  & .itensContainer {
    height: 100%;

    display: flex;
    gap: 1rem;
  }
`

interface NavUserCardType {
  userConfig: boolean
}

export const NavUserCardStyled = styled.div<NavUserCardType>`
  width: fit-content;
  height: 100%;

  display: flex;
  align-items: center;
  padding: 0 0.8rem 0 0.8rem;
  gap: 0.8rem;

  border-left: 1px solid ${colors.card_color5};
  border-right: 1px solid ${colors.card_color5};

  background-color: ${colors.card_color4};

  position: relative;

  & .imgPerf {
    max-width: 35px;
    height: 35px;

    border-radius: 50%;

    overflow: hidden;

    & img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  & .contentCard {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.2rem;
    user-select: none;

    color: ${colors.gray5};
    cursor: pointer;

    transition: all 0.1s ease-in;

    ${(props) =>
      props.userConfig
        ? css`
            color: ${colors.gray6};
          `
        : ''}

    &:hover {
      color: ${colors.gray6};
    }

    & h3 {
      font-weight: 500;
      font-size: ${fontSize.S};
    }

    & span {
      font-weight: 400;
      font-size: ${fontSize.XS};
    }
  }
`
interface UserNavConfigCardType {
  userConfig: boolean
}

export const UserNavConfigCardStyled = styled.div<UserNavConfigCardType>`
  width: calc(100% + 2px);

  position: absolute;
  top: 70px;
  left: -1px;

  background-color: ${colors.card_color1};

  display: ${(props) => (props.userConfig ? 'flex' : 'none')};
  flex-direction: column;

  padding: 1rem 0 0.5rem 0;

  border: 1px solid ${colors.card_color5};
  border-radius: 0 0 4px 4px;

  animation: ${popAnin} 0.2s ease-in-out;

  & ul {
    list-style: none;

    & li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;

      font-size: ${fontSize.S};
      color: ${colors.gray5};

      padding: 1rem 0.5rem 1rem 1.5rem;

      transition: all 0.1s ease-in;

      &:hover {
        background-color: ${colors.card_color4};
        color: ${colors.gray6};
        cursor: pointer;
      }
    }
  }
`

export const ButtonNavStyled = styled.button`
  background: transparent;
  border: none;
  color: ${colors.gray5};

  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.05);
    color: ${colors.gray7};
  }
  &:active {
    transform: scale(0.95);
  }
`
