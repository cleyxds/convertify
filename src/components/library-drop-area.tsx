"use client"

import { useState } from "react"

import { styled } from "@mui/material"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid2 from "@mui/material/Grid2"
import SvgIcon from "@mui/material/SvgIcon"

import MUIImage from "@/components/mui-image"
import Dropzone from "./dropzone"

export default function LibraryDropArea({}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleUploadedFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)

    setImageUrl(imageUrl)
  }

  return (
    <Stack
      width={500}
      height="100%"
      p={2}
      boxShadow={(theme) => theme.shadows.apple}
      bgcolor="black.100"
      overflow="hidden"
      sx={{
        backdropFilter: "blur(30px)",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
      }}
    >
      <Dropzone />
      {/* <Stack gap="1rem">
        <Stack
          width="50%"
          alignSelf="center"
          alignItems="center"
          borderRadius="0.25rem"
          padding="0.5rem"
        >
          {imageUrl ? (
            <MUIImage
              src={imageUrl}
              title="Preview da image"
              alt="Preview da image"
              width={250}
              height={250}
            />
          ) : (
            <Stack width={250} height={250} alignItems="center" justifyContent="center">
              <Typography
                variant="h6"
                color="#FFFFFF"
                fontFamily="var(--font-poppins)"
                fontWeight="400"
                textAlign="center"
              >
                Nenhuma imagem selecionada
              </Typography>
            </Stack>
          )}
        </Stack>

        <Button
          color={false ? "error" : undefined}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
        >
          Carregue uma imagem
          <VisuallyHiddenInput onChange={handleUploadedFile} type="file" />
        </Button>
      </Stack> */}
    </Stack>
  )
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
})
