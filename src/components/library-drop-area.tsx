"use client"

import { useCallback, useState } from "react"

import { alpha } from "@mui/material"
import Stack from "@mui/material/Stack"
import Grid2 from "@mui/material/Grid2"
import SvgIcon from "@mui/material/SvgIcon"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"

import MUIImage from "@/components/mui-image"
import ImagesDropzone from "./images-dropzone"

export default function LibraryDropArea({
  onDownloadImages,
  hasDownloadList,
}: {
  onDownloadImages: (images: BackendImage[]) => void
  hasDownloadList: boolean
}) {
  const [images, setImages] = useState<File[]>([])
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages((images) => [...images, ...acceptedFiles.slice(0, 10)])
  }, [])

  async function handleConvertImages() {
    try {
      setLoading(true)

      if (!images?.length) return alert("Nenhuma imagem para converter")

      const formData = new FormData()
      images.forEach((image) => {
        formData.append("images", image)
      })

      await fetch("http://localhost:3001/api/convert-images", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data: BackendReturn) => {
          onDownloadImages(data.images)
          setImages([])
        })
        .catch((error) => {
          console.error("Error:", error)
        })
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Stack
      width={500}
      height="100%"
      bgcolor="black.100"
      overflow="hidden"
      position="relative"
      sx={{
        backdropFilter: "blur(30px)",
        borderTopRightRadius: hasDownloadList ? 0 : 12,
        borderBottomRightRadius: hasDownloadList ? 0 : 12,
      }}
    >
      {Boolean(images?.length) ? (
        <Stack position="relative" height="100%" width="100%" sx={{ overflowY: "auto" }}>
          <Grid2 container direction="row" spacing={2} width="100%" height="100%">
            {images.map((image, imageIndex) => {
              const hasMultipleImages = images.length > 1

              return (
                <Grid2 key={image.name} size={hasMultipleImages ? 6 : 12}>
                  <Stack
                    position="relative"
                    width="100%"
                    height={hasMultipleImages ? 192 : "100%"}
                    borderRadius={1.25}
                    overflow="hidden"
                  >
                    <Stack position="absolute" top={0} right={0} zIndex={1}>
                      <IconButton
                        onClick={() =>
                          setImages((prevImages) =>
                            prevImages.filter((_, index) => index !== imageIndex)
                          )
                        }
                      >
                        <SvgIcon viewBox="0 0 24 24" sx={{ color: "white.64" }}>
                          <path
                            fill="currentColor"
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          />
                        </SvgIcon>
                      </IconButton>
                    </Stack>

                    <Stack width="100%" height="100%" position="relative">
                      <MUIImage
                        src={URL.createObjectURL(image)}
                        title="Preview da image"
                        alt="Preview da image"
                        fill
                        priority
                        sizes="(max-width: 600px) 100vw, 600px"
                      />

                      <Stack
                        position="absolute"
                        bgcolor={(theme) => alpha(theme.palette.common.black, 0.1)}
                        sx={{ inset: 0 }}
                      />
                    </Stack>
                  </Stack>
                </Grid2>
              )
            })}
          </Grid2>

          <Stack position="absolute" p={1.25} sx={{ inset: 0 }}>
            <ImagesDropzone onDrop={onDrop} disableOverlay />
          </Stack>
        </Stack>
      ) : (
        <ImagesDropzone onDrop={onDrop} />
      )}

      <Stack position="absolute" bottom={0} right={0} p={1.25}>
        <Button
          onClick={handleConvertImages}
          loading={loading}
          disabled={loading}
          variant="contained"
          sx={{
            bgcolor: "black.100",
            color: "white.100",
            transition: "opacity 0.3s",

            "&:hover": {
              opacity: 0.8,
              transition: "opacity 0.3s",
            },
          }}
        >
          Converter
        </Button>
      </Stack>
    </Stack>
  )
}
