import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { useHistory, useLocation } from 'react-router'

const tracking = (): void => {
  const GA_ID = process.env.REACT_APP_GA_ID
  const { listen } = useHistory()
  const location = useLocation()

  const send = (pathname: string): void => {
    console.log('ga tracking', location.pathname)
    if (GA_ID) {
      console.log('send')
      ReactGA.pageview(pathname)
    }
  }

  send(location.pathname)

  useEffect(() => {
    const unlisten = listen((location) => {
      send(location.pathname)
    })
    return unlisten
  }, [listen])
}

export default tracking
