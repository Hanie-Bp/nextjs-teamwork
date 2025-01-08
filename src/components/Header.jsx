"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkMode from "@/components/DarkMode";
import { Avatar } from "@mui/material";

const drawerWidth = 240;
const links = [
  { href: "/", title: "Home" },
  { href: "/question", title: "Question" },
  { href: "/aboutus", title: "About us" },
];

function Header({ toggleTheme, mode }) {
  const path = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Avatar
          className="rounded-3xl"
          src="/images/logo.jpg"
          alt="logo"
          width={50}
          height={50}
        />
      </Box>
      <Divider />
      <List>
        {links.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            style={{
              color: `${mode === "light" ? "black" : "white"}`,
              textDecoration: "none",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <Box sx={{ mt: 2 }}>
        <DarkMode toggleTheme={toggleTheme} />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="header"
        sx={{
          backgroundColor: `${mode === "light" ? "#1976d2" : "#156589"}`,
          position: "fixed",
        }}
        position="relative"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <Avatar
              className="rounded-3xl"
              src="/images/logo.jpg"
              alt="logo"
              width={50}
              height={50}
            />
            <List sx={{ display: "flex", ml: 2 }}>
              {links.map((item) => {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton sx={{ textAlign: "center" }}>
                        <ListItemText
                          primary={item.title}
                          sx={{ color: "white" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>

          {/* دکمه دارک مود فقط در دسکتاپ */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <DarkMode toggleTheme={toggleTheme} />
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;
