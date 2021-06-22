import React from 'react'
import styled from 'styled-components'

const Element: React.FC<IconProps> = (props) => {
  return <StyledIcon {...props} />
}

export type IconProps = {
  width?: string
  height?: string
  color?: string
  children?: React.ReactNode
}

const StyledIcon = styled.div<{
  width?: string
  height?: string
  color?: string
}>`
  display: inline-flex;
  fill: ${(props): string => (props.color ? props.color : 'var(--color-text)')};
  &&& svg {
    ${(props): string => (props.width ? `width: ${props.width};` : '')}
    ${(props): string => (props.height ? `height: ${props.height};` : '')}
  }
`

export default Element
