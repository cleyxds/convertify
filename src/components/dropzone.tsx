import React, { useCallback } from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { useDropzone } from "react-dropzone"

export default function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Processar os arquivos aqui
    console.log(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: "2px dashed #1976d2",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography>Solte a imagem aqui...</Typography>
      ) : (
        <Typography>
          Arraste e solte uma imagem aqui, ou clique para selecionar um arquivo
        </Typography>
      )}
    </Box>
  )
}
