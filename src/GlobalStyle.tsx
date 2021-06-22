import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle: React.FC = () => {
  return <GlobalStyleCss />
}

const GlobalStyleCss = createGlobalStyle`
  :root{
    --color-color: #000000;
    --color-background: #ffffff

  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
    color: var(----color-color);
    background: var(----background-color);
    border:0;
  }

  a {
    text-decoration:none;
  }
`

export default GlobalStyle
