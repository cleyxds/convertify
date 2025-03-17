"use client"

import { useCallback, useState } from "react"

import Stack from "@mui/material/Stack"

import Background from "@/components/background"
import SideBar from "@/components/side-bar"
import Library from "@/components/library"
import LibraryDropArea from "@/components/library-drop-area"
import DownloadList from "@/components/download-list"

export default function page() {
  const [downloableImages, setDownloableImages] = useState<BackendImage[]>([])

  const onDownloadImages = useCallback((newImages: BackendImage[]) => {
    setDownloableImages((images) => [...images, ...newImages])
  }, [])

  const clearDownloadList = useCallback(() => {
    setDownloableImages([])
  }, [])

  const hasDownloadList = !!downloableImages.length

  return (
    <Stack component="main">
      <Background>
        <Stack
          direction={{
            lg: "row",
            xs: "column",
          }}
          alignItems="center"
          gap={3}
        >
          <SideBar />

          <Stack
            direction={{
              lg: "row",
              xs: "column",
            }}
            height={{
              lg: 400,
              xs: 800,
            }}
          >
            <Library />
            <LibraryDropArea
              hasDownloadList={hasDownloadList}
              onDownloadImages={onDownloadImages}
            />
            <DownloadList
              downloableImages={downloableImages}
              clearDownloadList={clearDownloadList}
            />
          </Stack>
        </Stack>
      </Background>
    </Stack>
  )
}
