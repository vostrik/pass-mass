import { globalStyle, style } from '@vanilla-extract/css'

import { tokens } from '../design-system'

globalStyle('html, body', {
  margin: 0,
  fontSize: tokens.font.default.fontSize,
  fontFamily: tokens.font.default.fontFamily,
  color: tokens.color.primary
})

export const footerStyle = style({
  textAlign: 'center'
})