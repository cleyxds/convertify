import React from "react"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { useDropzone } from "react-dropzone"

export default function ImagesDropzone({
  onDrop,
  disableOverlay = false,
}: {
  onDrop: (acceptedFiles: File[]) => void
  disableOverlay?: boolean
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Stack
      {...getRootProps()}
      width="100%"
      height="100%"
      textAlign="center"
      p={1.25}
      borderRadius={1.25}
      overflow="hidden"
      sx={{ cursor: "pointer" }}
    >
      <input {...getInputProps()} />

      {!disableOverlay && (
        <Stack height="100%" width="100%" justifyContent="center" alignItems="center">
          {isDragActive ? (
            <Typography variant="subtitle2" color="white.64">
              Solte a imagem aqui...
            </Typography>
          ) : (
            <Typography variant="subtitle2" color="white.64">
              Arraste e solte uma imagem aqui, ou clique para selecionar uma imagem
            </Typography>
          )}
        </Stack>
      )}

      {disableOverlay && isDragActive && (
        <Stack
          height="100%"
          width="100%"
          justifyContent="center"
          alignItems="center"
          bgcolor="black.100"
        >
          <Typography variant="subtitle2" color="white.64">
            Solte a imagem aqui...
          </Typography>
        </Stack>
      )}
    </Stack>
  )
}
