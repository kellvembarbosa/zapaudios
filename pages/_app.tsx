import React from 'react'
import { Reset } from 'styled-reset'
import { GlobalStyle } from '../styles/createGlobal'
import { RecoilRoot } from 'recoil'
import ThemeRecoilProvider from '../contexts/theme'
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeRecoilProvider>
        <Reset />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeRecoilProvider>
    </RecoilRoot>
  )
}

export default MyApp
