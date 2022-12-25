export * from './tokens.css'

import { lightTheme } from './themes/light.css'

export type ThemeKeys = 'light'

export const themes = {
  light: lightTheme,
}