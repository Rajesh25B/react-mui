import { Navbar } from "./components/Navbar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack spacing={2} direction="row" justifyContent="space-between">
      <Navbar />
      <Sidebar />
      <Feed />
      <Rightbar />
    </Stack>
  );
}

export default App;
