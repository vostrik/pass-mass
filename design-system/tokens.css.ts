import { createThemeContract } from '@vanilla-extract/css'

export const tokens = createThemeContract({
  color: {
    background: null,
    primary: null,
    gradient: null
  },
  font: {
    default: {
      fontSize: null,
      fontFamily: null
    },
    accent: {
      fontSize: null,
      fontFamily: null
    }
  }
})