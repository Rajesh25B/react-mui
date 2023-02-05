import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BalanceIcon from "@mui/icons-material/Balance";
import BarChartIcon from "@mui/icons-material/BarChart";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Switch from "@mui/material/Switch";

export function Sidebar({ mode, setMode }) {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} flex={1}>
      <Box position="static">
        {/* MUI  Lists (Cards) */}

        <List>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AnalyticsIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Breakdown" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Geography" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <NightsStayIcon />
            </ListItemIcon>
            <Switch
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}
