import { styled } from '@configs/stitches'

export const Button = styled('button', {
  border: 'none',
  paddingRight: '1rem',
  paddingLeft: '1rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  backgroundColor: 'violet',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  transitionProperty: 'all',
  transitionDuration: '200ms',
  transitionTimingFunction: 'ease',

  '&:hover': {
    backgroundColor: 'springgreen',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: '0 0px 0px 2px red',
  },

  '&:disabled': {
    backgroundColor: 'gray'
  }
})
