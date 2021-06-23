import React from 'react'
import ReactGA from 'react-ga'

const GA: React.FC = () => {
  const GA_ID = process.env.REACT_APP_GA_ID
  if (GA_ID) {
    ReactGA.initialize(GA_ID)
  }

  return <React.Fragment />
}

export default GA
