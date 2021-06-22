import React from 'react'
import styled from 'styled-components'

const Element: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {props.text}
      {props.children}
    </StyledButton>
  )
}

export type ButtonProps = {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  text?: string
  color?: string
  background?: string
  bold?: boolean
  fontSize?: string
  margin?: string
  padding?: string
}

const StyledButton = styled.div<{
  color?: string
  background?: string
  bold?: boolean
  fontSize?: string
  margin?: string
  padding?: string
}>`
  padding: ${(props): string => (props.padding ? props.padding : '12px')};
  margin: ${(props): string => (props.margin ? props.margin : '12px')};
  ${(props): string => (props.color ? `color: ${props.color};` : '')}
  ${(props): string =>
    props.background ? `background: ${props.background};` : ''}
  ${(props): string => (props.bold ? `font-weight: bold;` : '')}
  ${(props): string => (props.fontSize ? `font-size: ${props.fontSize};` : '')}
  ${(props): string =>
    props.fontSize ? `line-height: ${props.fontSize};` : ''}
  text-align: center;
  border-radius: 240px;
`

export default Element
