import React from 'react'

import Text, { TextProps } from './Text'

const Element: React.FC<TextProps> = (props) => {
  return (
    <h3>
      <Text {...props} />
    </h3>
  )
}

export default Element
