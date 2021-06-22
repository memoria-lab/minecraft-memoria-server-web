import React from 'react'

import Icon, { IconProps } from './Icon'

const Element: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="33"
        viewBox="0 0 27 33"
      >
        <path
          d="M18,1.5,4.5,7.5v9c0,8.325,5.76,16.11,13.5,18,7.74-1.89,13.5-9.675,13.5-18v-9Zm-3,24-6-6,2.115-2.115L15,21.255l9.885-9.885L27,13.5Z"
          transform="translate(-4.5 -1.5)"
          fill="#243411"
        />
      </svg>
    </Icon>
  )
}

export default Element
