import React from 'react'

import Icon, { IconProps } from './Icon'

const Element: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22.414"
        height="22.414"
        viewBox="0 0 22.414 22.414"
      >
        <g transform="translate(-3.5 -3.086)">
          <path
            d="M21.19,16.789v6.676a2.225,2.225,0,0,1-2.225,2.225H6.725A2.225,2.225,0,0,1,4.5,23.465V11.225A2.225,2.225,0,0,1,6.725,9H13.4"
            transform="translate(0 -1.19)"
            fill="none"
            stroke={props.color ? props.color : 'var(--color-text)'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M22.5,4.5h6.676v6.676"
            transform="translate(-4.676)"
            fill="none"
            stroke={props.color ? props.color : 'var(--color-text)'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M15,16.739,27.239,4.5"
            transform="translate(-2.739)"
            fill="none"
            stroke={props.color ? props.color : 'var(--color-text)'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </Icon>
  )
}

export default Element
