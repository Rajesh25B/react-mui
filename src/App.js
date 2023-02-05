import { Navbar } from "./components/Navbar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Box, Stack } from "@mui/material";
import { AddPost } from "./components/AddPost";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>

      <AddPost />
    </Box>
  );
}

export default App;
