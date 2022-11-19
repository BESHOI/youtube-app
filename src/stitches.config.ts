import * as Stitches from '@stitches/react'

export const { styled, css, globalCss, keyframes, theme, createTheme, getCssText } =
  Stitches.createStitches({
    theme: {
      colors: {
        red: '#f00000',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#eeeeee',
        text: '$black',
        background: '$white',
      },
      space: {
        auto: `auto`,
        0: `0`,
        1: `clamp(0.25rem, calc(0.23rem + 0.12vw), 0.31rem)`,
        2: `clamp(0.50rem, calc(0.45rem + 0.24vw), 0.63rem)`,
        3: `clamp(0.75rem, calc(0.68rem + 0.37vw), 0.94rem)`,
        4: `clamp(1.00rem, calc(0.90rem + 0.49vw), 1.25rem)`,
        5: `clamp(1.50rem, calc(1.35rem + 0.73vw), 1.88rem)`,
        6: `clamp(2.00rem, calc(1.80rem + 0.98vw), 2.50rem)`,
        7: `clamp(3.00rem, calc(2.71rem + 1.46vw), 3.75rem)`,
        8: `clamp(4.00rem, calc(3.61rem + 1.95vw), 5.00rem)`,
        9: `clamp(6.00rem, calc(5.41rem + 2.93vw), 7.50rem)`,
      },
      shadows: {},
      fontSizes: {
        0: `clamp(0.69rem, calc(0.65rem + 0.21vw), 0.80rem)`,
        1: `clamp(0.83rem, calc(0.77rem + 0.33vw), 1.00rem)`,
        2: `clamp(1.00rem, calc(0.90rem + 0.49vw), 1.25rem)`,
        3: `clamp(1.20rem, calc(1.06rem + 0.71vw), 1.56rem)`,
        4: `clamp(1.44rem, calc(1.24rem + 1.00vw), 1.95rem)`,
        5: `clamp(1.73rem, calc(1.45rem + 1.39vw), 2.44rem)`,
      },
      fontWeights: {
        1: `300`,
        2: `400`,
        3: `500`,
        4: `600`,
        5: `700`,
        6: `800`,
        7: `900`,
      },
      lineHeights: {
        1: `1`,
        2: `1.1`,
        3: `1.25`,
        4: `1.5`,
        5: `1.6`,
        6: `1.75`,
      },
      letterSpacings: {},
      sizes: {
        auto: `auto`,
        0: `0`,
        1: `clamp(0.25rem, calc(0.23rem + 0.12vw), 0.31rem)`,
        2: `clamp(0.50rem, calc(0.45rem + 0.24vw), 0.63rem)`,
        3: `clamp(0.75rem, calc(0.68rem + 0.37vw), 0.94rem)`,
        4: `clamp(1.00rem, calc(0.90rem + 0.49vw), 1.25rem)`,
        5: `clamp(1.50rem, calc(1.35rem + 0.73vw), 1.88rem)`,
        6: `clamp(2.00rem, calc(1.80rem + 0.98vw), 2.50rem)`,
        7: `clamp(3.00rem, calc(2.71rem + 1.46vw), 3.75rem)`,
        8: `clamp(4.00rem, calc(3.61rem + 1.95vw), 5.00rem)`,
        9: `clamp(6.00rem, calc(5.41rem + 2.93vw), 7.50rem)`,
      },
      borderWidths: {
        1: `1px`,
        2: `2px`,
        3: `3px`,
        4: `4px`,
        5: `5px`,
      },
      borderStyles: {},
      radii: {
        1: `4px`,
        2: `8px`,
        3: `16px`,
        4: `50%`,
        5: `99999px`,
      },
      zIndices: {
        1: `2`,
        2: `3`,
        3: `4`,
        4: `5`,
        5: `99999`,
      },
      transitions: {
        //ease
        1: `all cubic-bezier(.25, 0, .5, 1)`,
        2: `all cubic-bezier(.25, 0, .4, 1)`,
        //ease-in
        3: `all cubic-bezier(.25, 0, 1, 1)`,
        4: `all cubic-bezier(.50, 0, 1, 1)`,
        //ease-in-out
        5: `all cubic-bezier(0, 0, .75, 1)`,
        6: `all cubic-bezier(0, 0, .50, 1)`,
      },
    },
    media: {
      bp1: `(min-width: 480px)`,
      bp2: `(min-width: 768px)`,
      bp3: `(min-width: 1024px)`,
      bp4: `(min-width: 1200px)`,
      bp5: `(min-width: 1367px)`,
      bp6: `(min-width: 1440px)`,
      bp7: `(min-width: 1800px)`,
      light: `(prefers-color-scheme: light)`,
      dark: `(prefers-color-scheme: dark)`,
      motion: `(prefers-reduced-motion: no-preference)`,
      reduce: `(prefers-reduced-motion: reduce)`,
      hover: `(hover: hover)`,
      print: `print`,
    },
    utils: {
      m: (value: Stitches.ScaleValue<'space'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.ScaleValue<'space'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.ScaleValue<'space'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.ScaleValue<'space'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.ScaleValue<'space'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.ScaleValue<'space'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.ScaleValue<'space'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      mi: (value: Stitches.ScaleValue<'space'>) => ({
        marginInline: value,
      }),
      p: (value: Stitches.ScaleValue<'space'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.ScaleValue<'space'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.ScaleValue<'space'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.ScaleValue<'space'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.ScaleValue<'space'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.ScaleValue<'space'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.ScaleValue<'space'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  })
