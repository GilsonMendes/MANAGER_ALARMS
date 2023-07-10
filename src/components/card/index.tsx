import { ReactNode } from 'react'
import { CardStyled } from './card.styled'

interface CardType {
  children: ReactNode
  warning?: boolean
}

export function CardWrapper({ children, warning = false }: CardType) {
  return <CardStyled warning={warning}>{children}</CardStyled>
}
