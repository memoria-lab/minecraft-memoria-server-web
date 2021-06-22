import App from 'App'
import ErrorFallback from 'ErrorFallback'
import GlobalStyle from 'GlobalStyle'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'

const AppWrapper: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </React.Fragment>
  )
}

export default AppWrapper
