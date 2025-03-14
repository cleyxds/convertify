"use client"

import { useCallback, useEffect, useState } from "react"

import Stack from "@mui/material/Stack"
import Grid2 from "@mui/material/Grid2"
import SvgIcon from "@mui/material/SvgIcon"
import IconButton from "@mui/material/IconButton"

import MUIImage from "@/components/mui-image"
import ImagesDropzone from "./images-dropzone"
import { alpha } from "@mui/material"

export default function LibraryDropArea({}) {
  const [images, setImages] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages((images) => [...images, ...acceptedFiles.slice(0, 10)])
  }, [])

  useEffect(() => {
    if (!images?.length) return

    const lastestAddedImage = images[images.length - 1]
  }, [images])

  return (
    <Stack
      width={500}
      height="100%"
      boxShadow={(theme) => theme.shadows.apple}
      bgcolor="black.100"
      overflow="hidden"
      sx={{
        backdropFilter: "blur(30px)",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
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
    </Stack>
  )
}
