import '../node_modules/modern-normalize/modern-normalize.css'
import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'InterVariable',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontWeight: '100 900',
      src: `url('/font/inter-latin-variable-wghtOnly-normal.woff2') format('woff2') `,
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  ],

  html: {
    scrollBehavior: `smooth`,
    accentColor: 'red',
  },

  body: {
    fontFamily: `'InterVariable',
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji`,
    textRendering: `optimizeSpeed`,
    fontWeight: `$2`,
    lineHeight: `$5`,
    backgroundColor: `$background`,
    color: `$text`,
  },

  ' h1, h2, h3, h4, h5': {
    lineHeight: `$2`,
  },

  h1: {
    fontSize: `$5`,
    fontWeight: `$7`,
    letterSpacing: `-1px`,
  },
  h2: {
    fontSize: `$4`,
    fontWeight: `$6`,
  },
  h3: {
    fontSize: `$3`,
    fontWeight: `$5`,
  },
  h4: {
    fontSize: `$3`,
    fontWeight: `$4`,
  },
  h5: {
    fontSize: `$3`,
    fontWeight: `$4`,
  },
  h6: {
    fontSize: `$2`,
    fontWeight: `$3`,
  },
  'p, li, span': {
    fontSize: `$1`,
  },

  small: {
    fontSize: `$0`,
    fontWeight: `$2`,
  },

  a: {
    color: `inherit`,
  },

  'blockquote, body, dd, dl, figure, h1, h2, h3, h4, p': {
    margin: 0,
  },

  'h1 + span': {
    margin: `$4 $0 $6 !important`,
  },

  '*:not(h1) + span': {
    margin: `$2 $0 !important`,
  },

  'ol ': {
    '& li::first-letter': {
      textTransform: `capitalize`,
    },
    '& li + li': {
      mt: `$1`,
    },
  },

  '.container': {
    maxWidth: `75rem`,
    p: `$4`,
    mi: `$auto`,
    minHeight: `100vh`,
    display: `grid`,
    gridTemplate: `70px 1fr auto / 100%`,
    gap: `$4`,
  },


  '.flow > *:where(:not(:first-child)) ': {
    marginTop: `var(--flow-spacer, .75em)`,
  },
})
