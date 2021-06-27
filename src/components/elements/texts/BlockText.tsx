import React from 'react'
import styled from 'styled-components'

import InlineText from './InlineText'
import { TextProps } from './Text'

const Element: React.FC<TextProps> = (props) => {
  return (
    <Style
      {...props}
      color="var(--color-block-text)"
      background="var(--color-block-background)"
      padding="0 4px"
      margin="0 4px"
    />
  )
}

const Style = styled(InlineText)`
  border-radius: 4px;
`

export default Element
