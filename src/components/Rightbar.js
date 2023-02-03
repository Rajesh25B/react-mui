import { Box } from "@mui/material";

export const Rightbar = () => {
  return (
    <Box
      sx={{ backgroundColor: "#87b342", display: { xs: "none", sm: "block" } }} // added breakpoints
      flex={1}
      p={1}
    >
      Rightbar
    </Box>
  );
};
