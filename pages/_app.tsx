// Dependencies
import {AppProps} from 'next/app'

// Style
import { Global } from '@emotion/react'
import { globalStyles } from '@shared/globals'

function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
