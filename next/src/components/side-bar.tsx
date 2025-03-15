"use client"

import { styled } from "@mui/material"
import Stack from "@mui/material/Stack"
import Grid2 from "@mui/material/Grid2"
import MUISvgIcon from "@mui/material/SvgIcon"

export default function SideBar() {
  return (
    <Stack
      width={40.8}
      height="fit-content"
      p={0.75}
      boxShadow={(theme: any) => theme.shadows.apple}
      borderRadius={9999}
      bgcolor="black.100"
      sx={{ backdropFilter: "blur(30px)" }}
    >
      <Grid2 container spacing={1.5}>
        <Grid2 size={12}>
          <Stack width={28.8} height={28.8} justifyContent="center" alignItems="center">
            <SvgIcon>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.19699 14.1008C10.8161 14.1008 13.8034 11.1135 13.8034 7.50077C13.8034 3.88801 10.8098 0.900772 7.1906 0.900772C3.57784 0.900772 0.596985 3.88801 0.596985 7.50077C0.596985 11.1135 3.58422 14.1008 7.19699 14.1008ZM7.19699 12.7859C4.2672 12.7859 1.92464 10.4306 1.92464 7.50077C1.92464 4.57099 4.2672 2.22205 7.1906 2.22205C10.1204 2.22205 12.4757 4.57099 12.4821 7.50077C12.4885 10.4306 10.1268 12.7859 7.19699 12.7859ZM9.67358 7.85822C9.94167 7.70503 9.93528 7.31567 9.67358 7.16247L5.99699 4.99226C5.71613 4.83269 5.34592 4.96673 5.34592 5.2795V9.73482C5.34592 10.0476 5.69699 10.2008 5.99699 10.022L9.67358 7.85822Z"
                  fill="white"
                />
              </svg>
            </SvgIcon>
          </Stack>
        </Grid2>

        <Grid2 size={12}>
          <Stack width={28.8} height={28.8} justifyContent="center" alignItems="center">
            <SvgIcon sx={{ ml: "4px" }}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.16226 10.3127C6.15343 10.3127 7.08226 10.0135 7.85525 9.50232L10.5856 12.2389C10.7664 12.4135 10.9971 12.5008 11.2464 12.5008C11.7638 12.5008 12.1441 12.0956 12.1441 11.5844C12.1441 11.3475 12.063 11.1169 11.8885 10.9423L9.1768 8.21817C9.73784 7.42024 10.0682 6.45401 10.0682 5.40674C10.0682 2.70752 7.86148 0.500763 5.16226 0.500763C2.46927 0.500763 0.256287 2.70752 0.256287 5.40674C0.256287 8.10596 2.46304 10.3127 5.16226 10.3127ZM5.16226 9.00362C3.18616 9.00362 1.56538 7.38284 1.56538 5.40674C1.56538 3.43063 3.18616 1.80985 5.16226 1.80985C7.13836 1.80985 8.75914 3.43063 8.75914 5.40674C8.75914 7.38284 7.13836 9.00362 5.16226 9.00362Z"
                  fill="white"
                />
              </svg>
            </SvgIcon>
          </Stack>
        </Grid2>
      </Grid2>
    </Stack>
  )
}

const SvgIcon = styled(MUISvgIcon)({
  width: 24,
  height: 24,
  cursor: "pointer",
})
