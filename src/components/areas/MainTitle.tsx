import H1 from 'components/elements/texts/H1'
import React from 'react'

const Area: React.FC<MainTitleProps> = (props) => {
  return (
    <H1 text={props.title} color={props.color} background={props.background} />
  )
}

export type MainTitleProps = {
  title: string
  color?: string
  background?: string
}

export default Area
