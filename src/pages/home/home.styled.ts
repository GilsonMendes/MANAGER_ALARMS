import styled from 'styled-components'

export const HomeContainerStyled = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
`

export const GridContainer = styled.div`
  max-width: 1600px;
  flex: 1;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.2rem;
  padding: 5.625rem 1.5rem 1.25rem 1.5rem;

  & :nth-child(1) {
    grid-column: span 4;
  }
  & :nth-child(2) {
    grid-column: span 2;
  }
  & :nth-child(3) {
    grid-column: span 2;
  }
  & :nth-child(4) {
    grid-column: span 2;
  }
  & :nth-child(5) {
    grid-column: span 2;
  }
`
