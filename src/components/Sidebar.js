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

export function Sidebar() {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} flex={1}>
      <Box position="static">
        {/* MUI  Lists (Cards) */}

        <List>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AnalyticsIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Sales" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Worksheets" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <NightsStayIcon />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}
