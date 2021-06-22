import Content, { ContentProps } from 'components/areas/Content'
import MainTitle, { MainTitleProps } from 'components/areas/MainTitle'
import React from 'react'

const Template: React.FC<MainTemplateProps> = (props) => {
  return (
    <React.Fragment>
      <MainTitle title={props.title} icon={props.icon} color={props.color} />
      <Content content={props.content} color={props.color} />
    </React.Fragment>
  )
}

export type MainTemplateProps = MainTitleProps & ContentProps

export default Template
