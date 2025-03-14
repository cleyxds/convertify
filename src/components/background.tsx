"use client"

import { alpha } from "@mui/material"
import Stack from "@mui/material/Stack"

import MUIImage from "@/components/mui-image"

export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <Stack height="100dvh" position="relative" overflow="hidden">
      <MUIImage
        src="/images/background.webp"
        alt="Background"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />

      <Stack
        position="absolute"
        top="50%"
        left="50%"
        width="50%"
        mx="auto"
        zIndex={1}
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        {children}
      </Stack>

      <Stack
        position="absolute"
        bgcolor={(theme) => alpha(theme.palette.common.black, 0.1)}
        sx={{ inset: 0, backdropFilter: "blur(20px)" }}
      />
    </Stack>
  )
}
