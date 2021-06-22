import H1 from 'components/elements/texts/H1'
import React from 'react'
import styled from 'styled-components'

const Area: React.FC<MainTitleProps> = (props) => {
  return (
    <StyledMainTitle>
      {props.icon}
      <H1
        fontSize="32px"
        text={props.title}
        color={props.color}
        background={props.background}
      />
    </StyledMainTitle>
  )
}

export type MainTitleProps = {
  title: string
  icon?: React.ReactNode
  color?: string
  background?: string
}

const StyledMainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > * {
    margin: 0 6px;
  }
`

export default Area
