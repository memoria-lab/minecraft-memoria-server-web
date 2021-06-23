import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { useHistory } from 'react-router'

const tracking = (): void => {
  const GA_ID = process.env.REACT_APP_GA_ID
  const { listen } = useHistory()

  useEffect(() => {
    const unlisten = listen((location) => {
      GA_ID && ReactGA.pageview(location.pathname)
    })
    return unlisten
  }, [listen])
}

export default tracking
