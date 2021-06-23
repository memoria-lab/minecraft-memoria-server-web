import BackgroundImage from 'images/index-background.png'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle: React.FC = () => {
  return <GlobalStyleCss />
}

const GlobalStyleCss = createGlobalStyle`
  :root{
    --color-text: #222222;
    --color-background: #e7ebfcd7;
    --color-1: #243411;
    --color-2:#341111;
    --color-3:#111c34;
    --color-4:#341131;
    --color-splash-background:#eaf3d4
  }

  html, body {
    min-width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    font-family: "aniuk", "heisei-maru-gothic-std", "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", "Arial", "Yu Gothic", sans-serif;
    color: var(--color-text);
    background: var(--color-background);
    background-image: url('${BackgroundImage}');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-blend-mode: lighten;
    border:0;
  }

  a {
    text-decoration:none;
  }
`

export default GlobalStyle
