import { Box } from "@mui/material";

export function Sidebar() {
  return (
    <Box
      sx={{ backgroundColor: "#4295b3", display: { xs: "none", sm: "block" } }}
      flex={1}
      p={1}
    >
      Sidebar
    </Box>
  );
}
