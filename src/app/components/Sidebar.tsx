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
  Divider,
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
  {
    text: "Notifications",
    icon: <Notifications />,
    href: "/notifications",
  },
  { text: "Analytics", icon: <Analytics />, href: "/analytics" },
  { text: "Likes", icon: <Favorite />, href: "/likes" },
  { text: "Wallets", icon: <AccountBalanceWallet />, href: "/wallets" },
  { text: "Messages", icon: <Message />, href: "/messages" },
  { text: "Logout", icon: <ExitToApp />, href: "/logout" },
  { text: "Settings", icon: <Settings />, href: "/settings" },
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
        {navItems.map((item) => (
          <Link key={item.text} href={item.href} passHref>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
