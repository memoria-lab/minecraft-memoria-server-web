import AppWrapper from 'AppWrapper'
import React from 'react'
import ReactDOM from 'react-dom'

if (process.env.NODE_ENV === 'production') {
  const noConsole = (): void => {}
  console.log = noConsole
  console.info = noConsole
  console.warn = noConsole
  console.error = noConsole
}

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
)
