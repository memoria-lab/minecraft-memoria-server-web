import React from 'react'

const Area: React.FC<ContentProps> = (props) => {
  return <React.Fragment>{props.content}</React.Fragment>
}

export type ContentProps = {
  content: React.ReactNode
}

export default Area
