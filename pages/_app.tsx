import type { AppProps } from 'next/app'

import '../styles/normalize.sass'
import '../styles/reset.sass'

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp