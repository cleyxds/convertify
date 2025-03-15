import { alpha } from "@mui/material"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import Grid2 from "@mui/material/Grid2"

import MUIImage from "@/components/mui-image"

export default function DownloadList({
  downloableImages,
}: {
  downloableImages: BackendImage[]
  clearDownloadList: () => void
}) {
  if (!downloableImages.length) return null

  return (
    <Stack
      width={150}
      height="100%"
      bgcolor="black.100"
      position="relative"
      sx={{
        backdropFilter: "blur(30px)",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {[...downloableImages].reverse().map((image, index) => (
        <Grid2 container direction="column" spacing={2}>
          <Grid2 size={12}>
            <Stack
              position="relative"
              width="100%"
              height={150}
              overflow="hidden"
              // borderRadius={1.25}
              key={`${image.filename}-${index}`}
            >
              <MUIImage
                src={`data:image/webp;base64,${image.data}`}
                title={`Download ${image.filename}`}
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

              <IconButton
                href={`data:image/webp;base64,${image.data}`}
                download={image.filename}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "white.100",

                  transition: "background-color 0.2s",

                  "&:hover": {
                    backgroundColor: "white.64",
                    transition: "background-color 0.2s",
                  },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </IconButton>
            </Stack>
          </Grid2>
        </Grid2>
      ))}
    </Stack>
  )
}
