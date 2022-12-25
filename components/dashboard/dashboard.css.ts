import { style } from '@vanilla-extract/css'

import { tokens } from '../../design-system'

export const gradientText = style({
  backgroundClip: 'text',
  backgroundImage: tokens.color.gradient,
  color: 'transparent'
})
