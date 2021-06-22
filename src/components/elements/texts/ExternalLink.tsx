import React from 'react'
import styled from 'styled-components'

import LinkIcon from '../icons/LinkIcon'

const Element: React.FC<ExternalLinkProps> = (props) => {
  return (
    <ExternalLink href={props.link} target="_blank" color={props.color}>
      {props.children}
      <LinkIcon color={props.color} width="16px" />
    </ExternalLink>
  )
}

export type ExternalLinkProps = {
  link: string
  color?: string
}

const ExternalLink = styled.a<{
  color?: string
}>`
  display: inline-flex;
  align-items: center;
  ${(props): string => (props.color ? `color: ${props.color} !important;` : '')}

  & > * {
    margin-right: 16px;
  }

  &:hover {
    opacity: 0.7;
  }
`

export default Element
