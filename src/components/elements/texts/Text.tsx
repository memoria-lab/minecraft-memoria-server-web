import React from 'react'
import styled from 'styled-components'

const Element: React.FC<TextProps> = (props) => {
  return (
    <StyledText {...props}>
      {props.text}
      {props.children}
    </StyledText>
  )
}

export type TextProps = {
  children?: React.ReactNode
  text?: string
  color?: string
  background?: string
  bold?: boolean
  fontSize?: string
}

const StyledText = styled.span<{
  color?: string
  background?: string
  bold?: boolean
  fontSize?: string
}>`
  display: block;
  ${(props): string => (props.color ? `color: ${props.color};` : '')}
  ${(props): string =>
    props.background ? `background: ${props.background};` : ''}
  ${(props): string => (props.bold ? `font-weight: bold;` : '')}
  ${(props): string => (props.fontSize ? `font-size: ${props.fontSize};` : '')}
  line-height: 1.4;
  white-space: pre-wrap;
`

export default Element
