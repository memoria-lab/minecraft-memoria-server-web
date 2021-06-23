import React from 'react'
import styled from 'styled-components'

const Area: React.FC<ContentProps> = (props) => {
  return <Content color={props.color}>{props.content}</Content>
}

export type ContentProps = {
  content: React.ReactNode
  color?: string
}

const Content = styled.div<{
  color?: string
}>`
  ${(props): string => (props.color ? `props.color: ${props.color};` : '')}
`

export default Area
