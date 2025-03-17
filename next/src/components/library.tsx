"use client"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import SvgIcon from "@mui/material/SvgIcon"

export default function Library() {
  return (
    <Stack
      width={{ lg: 240, xs: "80dvw" }}
      height={{ lg: "100%", xs: "50%" }}
      p={2}
      boxShadow={(theme: any) => theme.shadows.apple}
      bgcolor="black.100"
      overflow="hidden"
      sx={{
        backdropFilter: "blur(30px)",
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: { lg: 12, xs: 0 },
        borderTopRightRadius: { lg: 0, xs: 12 },
        borderBottomRightRadius: { lg: 0, xs: 0 },
      }}
    >
      <Stack gap={2}>
        <Stack>
          <Typography variant="h6" color="common.white">
            Biblioteca
          </Typography>

          <Typography variant="subtitle2" color="white.64">
            Tudo
          </Typography>
        </Stack>

        <Stack
          gap={1.5}
          direction="row"
          alignItems="center"
          alignSelf="flex-start"
          sx={{ cursor: "pointer" }}
        >
          <SvgIcon
            sx={{
              width: 16,
              height: 16,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99491 11.0461C8.98495 11.0461 11.4529 8.57811 11.4529 5.59334C11.4529 2.60858 8.97968 0.14061 5.98964 0.14061C3.00487 0.14061 0.542175 2.60858 0.542175 5.59334C0.542175 8.57811 3.01014 11.0461 5.99491 11.0461ZM5.99491 9.95975C3.5744 9.95975 1.63905 8.01385 1.63905 5.59334C1.63905 3.17284 3.5744 1.23221 5.98964 1.23221C8.41014 1.23221 10.356 3.17284 10.3613 5.59334C10.3666 8.01385 8.41542 9.95975 5.99491 9.95975ZM3.3371 6.2578H5.98964C6.23221 6.2578 6.41678 6.07323 6.41678 5.83592V2.38709C6.41678 2.14979 6.23221 1.96522 5.98964 1.96522C5.75761 1.96522 5.57303 2.14979 5.57303 2.38709V5.41405H3.3371C3.09979 5.41405 2.91522 5.59862 2.91522 5.83592C2.91522 6.07323 3.09979 6.2578 3.3371 6.2578Z"
                fill="white"
                fillOpacity="0.8"
              />
            </svg>
          </SvgIcon>

          <Typography variant="subtitle2" color="white.64">
            Adicionado recentemente
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
