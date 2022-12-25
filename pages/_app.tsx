import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import { themes } from '../design-system'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={themes.light}>
      <Component {...pageProps} />
    </div>
  )
}

export default appWithTranslation(App)