import type { AppProps } from 'next/app'

import { themes } from '../design-system'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={themes.light}>
      <Component {...pageProps} />
    </div>
  )
}
