import { styled } from "@mui/material"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid2 from "@mui/material/Grid2"
import SvgIcon from "@mui/material/SvgIcon"

import Background from "@/components/background"
import SideBar from "@/components/side-bar"
import Library from "@/components/library"
import LibraryDropArea from "@/components/library-drop-area"

export default function page() {
  return (
    <Stack component="main">
      <Background>
        <Stack direction="row" alignItems="center" gap={3}>
          <SideBar />

          <Stack direction="row" height={400}>
            <Library />
            <LibraryDropArea />
          </Stack>
        </Stack>
      </Background>
    </Stack>
  )
}
