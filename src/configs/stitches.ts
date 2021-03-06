import { createCss } from '@stitches/react'

const space = {
  px: '1px',
  0: '0px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
}

const sizes = {
  none: 'none',
  auto: 'auto',
  ...space,
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  full: '100%',
  'screen-w': '100vw',
  'screen-h': '100vh',
  min: 'min-content',
  max: 'max-content',
}

export const { getCssString, styled, global } = createCss({
  theme: {
    space,
    sizes,
    fontWeights,
  },
  utils: {
    // Margin
    m:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
      }),
    mt:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        marginTop: value,
      }),
    mr:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        marginRight: value,
      }),
    mb:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        marginBottom: value,
      }),
    ml:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        marginLeft: value,
      }),
    mx:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        marginLeft: value,
        marginRight: value,
      }),
    my:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        marginTop: value,
        marginBottom: value,
      }),
    // Padding
    p:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value,
      }),
    pt:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        paddingTop: value,
      }),
    pr:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        paddingRight: value,
      }),
    pb:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        paddingBottom: value,
      }),
    pl:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        paddingLeft: value,
      }),
    px:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
    py:
      config =>
      (value: `$${keyof typeof config['theme']['space'] | (string & {})}`) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
  },
})

export const globalStyles = global({})
