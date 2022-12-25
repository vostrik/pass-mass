import { createTheme } from '@vanilla-extract/css'

import { tokens } from '../tokens.css'

// palette from:
// https://coolors.co/palette/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
export const lightTheme = createTheme(tokens, {
  color: {
    background: '#F8F9FA',
    primary: '#6C757D',
    gradient: 'linear-gradient(45deg, #228be6 0%, #15aabf 100%)'
  },
  font: {
    default: {
      fontSize: '16',
      fontFamily: 'Georgia'
    },
    accent: {
      fontSize: '32',
      fontFamily: 'Tahoma'
    }
  }
})