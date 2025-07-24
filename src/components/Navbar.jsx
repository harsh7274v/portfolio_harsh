import React, { useState } from "react";
import {
  Home as HomeIcon,
  Work as ProjectsIcon,
  Article as BlogsIcon,
  Person as AboutIcon,
  Email as ContactIcon,
  Menu as MenuIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  useTheme,
  useMediaQuery,
  Box,
  Typography,
  Avatar,
  IconButton,
  Drawer,
  Tooltip,
} from "@mui/material";
import { navbarStyles } from "./NavbarStyles";

const navItems = [
  { name: "Home", icon: <HomeIcon />, link: "/" },
  { name: "Projects", icon: <ProjectsIcon />, link: "/projects" },
  { name: "Blogs", icon: <BlogsIcon />, link: "/blogs" },
  { name: "About", icon: <AboutIcon />, link: "/about" },
  { name: "Contact", icon: <ContactIcon />, link: "/contact" },
];

const socialItems = [
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/harsh0204/",
  },
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    link: "https://github.com/harsh7274v",
  },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const mobileDrawer = (
    <Box sx={navbarStyles.drawerContent}>
      {navItems?.map((item) => (
        <Box
          key={item.name}
          component={Link}
          to={item.link}
          sx={navbarStyles.mobileNavItem}
          onClick={() => setIsDrawerOpen(false)}
        >
          {item.icon}
          <Typography>{item.name}</Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <>
      <Box sx={navbarStyles.container}>
        <Avatar
          src={process.env.PUBLIC_URL + '/profile.jpg'}
          alt="Profile Picture"
          sx={navbarStyles.avatar}
        />

        {isMobile && (
          <IconButton
            onClick={handleDrawerToggle}
            size="large"
            sx={navbarStyles.menuButton}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        )}

        <Box sx={navbarStyles.navContainer}>
          {navItems?.map((item) => (
            <Tooltip key={item.name} title={item.name} placement="right" arrow>
              <Box component={Link} to={item.link} sx={navbarStyles.navItem}>
                <Box sx={navbarStyles.iconContainer}>{item.icon}</Box>
              </Box>
            </Tooltip>
          ))}
        </Box>

        <Box sx={navbarStyles.navContainer}>
          {socialItems?.map((item) => (
            <Tooltip key={item.name} title={item.name} placement="right" arrow>
              <Box
                onClick={() => window.open(item.link, "_blank")}
                sx={navbarStyles.navItem}
              >
                <Box sx={navbarStyles.iconContainer}>{item.icon}</Box>
              </Box>
            </Tooltip>
          ))}
        </Box>

        <Drawer
          anchor="top"
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          sx={navbarStyles.mobileDrawer}
        >
          {mobileDrawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
