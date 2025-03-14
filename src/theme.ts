"use client"

import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface CustomPaletteColor {
    100: string
    75?: string
    64?: string
  }

  interface Shadows {
    apple: string
  }

  interface Palette {
    black: CustomPaletteColor
    white: CustomPaletteColor
  }

  interface PaletteOptions {
    black?: CustomPaletteColor
    white?: CustomPaletteColor
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-inter)",
    h6: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: ".875rem",
      fontWeight: 400,
    },
  },
  shadows: {
    apple:
      "0px 4.8px 3.6px rgba(0, 0, 0, 0.05), inset 0px -0.6px 0.6px rgba(255, 255, 255, 0.25), inset 0px 0.6px 0.6px rgba(255, 255, 255, 0.25)",
  },
  palette: {
    black: {
      "100": "rgba(0, 0, 0, 0.1)",
    },
    white: {
      "100": "#FFFFFF",
      "64": "rgba(255, 255, 255, 0.64)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
})

export default theme
