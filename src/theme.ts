"use client"

import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface CustomPaletteColor {
    // 100: string
    // 75?: string
  }

  interface Palette {
    // black: CustomPaletteColor
    // white: CustomPaletteColor
  }

  interface PaletteOptions {
    // black?: CustomPaletteColor
    // white?: CustomPaletteColor
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-inter)",
  },
  palette: {},
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
