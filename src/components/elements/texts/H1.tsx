import React from 'react'

import Text, { TextProps } from './Text'

const Element: React.FC<TextProps> = (props) => {
  return (
    <h1>
      <Text {...props} />
    </h1>
  )
}

export default Element
