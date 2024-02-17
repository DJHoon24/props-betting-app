import * as React from "react";
import {
  Dashboard,
  Notifications,
  Analytics,
  Favorite,
  AccountBalanceWallet,
  Message,
  ExitToApp,
  Settings,
} from "@mui/icons-material";
import Link from "next/link";
import {
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Drawer,
} from "@mui/material";

const drawerWidth = 240;

const navItems = [
  { text: "Dashboard", icon: <Dashboard />, href: "/" },
  { text: "NBA Tables", icon: <Dashboard />, href: "/table" },
  { text: "Notifications", icon: <Notifications /> },
  { text: "Analytics", icon: <Analytics /> },
  { text: "Likes", icon: <Favorite /> },
  { text: "Wallets", icon: <AccountBalanceWallet /> },
  { text: "Messages", icon: <Message /> },
  { text: "Logout", icon: <ExitToApp /> },
  { text: "Settings", icon: <Settings /> },
];

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Typography variant="h6" component="div">
        DJ Props Betting App
      </Typography>
      <List>
        {navItems.map((item) =>
          item.href ? (
            <Link key={item.text} href={item.href} passHref>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          ) : (
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ),
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
