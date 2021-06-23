import React from 'react'

import Icon, { IconProps } from './Icon'

const Element: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29.887"
        height="34.093"
        viewBox="0 0 29.887 34.093"
      >
        <path
          d="M28.044,0a3.679,3.679,0,0,1,3.6,3.516V34.093l-3.694-3.229-2.028-1.9-2.213-1.986.925,3.132H5.26a3.473,3.473,0,0,1-3.5-3.517V3.523A3.543,3.543,0,0,1,5.267,0H28.035ZM19.6,8.073h-.041l-.279.284a11.022,11.022,0,0,1,4.245,2.183A14.7,14.7,0,0,0,18.36,8.925a13.783,13.783,0,0,0-3.415,0h-.276a12.017,12.017,0,0,0-3.877,1.044c-.644.288-1.014.477-1.014.477a9.756,9.756,0,0,1,4.429-2.183l-.186-.192a8.13,8.13,0,0,0-4.8,1.8,22.723,22.723,0,0,0-2.491,9.972A5.989,5.989,0,0,0,11.9,22.413s.552-.757,1.111-1.423A5.472,5.472,0,0,1,10.055,19a4.549,4.549,0,0,1,.462.284H10.6a.109.109,0,0,1,.083.043v.009a.1.1,0,0,0,.083.043c.455.193.911.384,1.283.568a11.049,11.049,0,0,0,2.484.761,13.772,13.772,0,0,0,4.429,0,12.479,12.479,0,0,0,2.484-.76A19.713,19.713,0,0,0,23.374,18.9a5.49,5.49,0,0,1-3.043,1.994c.455.662,1.1,1.421,1.1,1.421a7.14,7.14,0,0,0,5.34-2.452,22.675,22.675,0,0,0-2.5-9.972,8.141,8.141,0,0,0-4.74-1.79l.077-.028Zm.232,6.269a1.906,1.906,0,1,1-1.752,1.9,1.829,1.829,0,0,1,1.752-1.9Zm-6.269,0a1.906,1.906,0,0,1-.006,3.8,1.9,1.9,0,0,1,0-3.8Z"
          transform="translate(-1.755)"
          fill="#111c34"
        />
      </svg>
    </Icon>
  )
}

export default Element