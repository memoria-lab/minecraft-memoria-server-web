import React from 'react'

import Text, { TextProps } from './Text'

const Element: React.FC<TextProps> = (props) => {
  return (
    <h2>
      <Text {...props} />
    </h2>
  )
}

export default Element
