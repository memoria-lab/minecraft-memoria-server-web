import Content from 'components/areas/Content'
import MainTitle from 'components/areas/MainTitle'
import React from 'react'

const Template: React.FC<MainTemplateProps> = (props) => {
  return (
    <React.Fragment>
      <MainTitle title={props.title} />
      <Content content={props.content} />
    </React.Fragment>
  )
}

export type MainTemplateProps = {
  title: string
  content: React.ReactNode
}

export default Template
