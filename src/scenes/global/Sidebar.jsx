import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  Typography,
  IconButton,
  useTheme,
  Toolbar,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import { tokens } from "../../theme";
import { SidebarItems } from "../../data/mockData";

const drawerWidth = 240;
const collapsedWidth = 60;

const SidebarItem = ({ title, to, Icon, selected, setSelected, open, isMobile, closeDrawer }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = () => {
    setSelected(title);
    if (isMobile && closeDrawer) closeDrawer(); 
  };

  return (
    <ListItemButton
      selected={selected === title}
      onClick={handleClick}
      component={Link}
      to={to}
      sx={{
        justifyContent: open || isMobile ? "initial" : "center",
        mt: isMobile ? "10px" : "0px",
        px: 3.5,
        "&.Mui-selected": {
          backgroundColor: colors.greenAccent[700],
          color: colors.grey[100],
        },
        "&.Mui-selected:hover": {
          backgroundColor: colors.greenAccent[700],
          color: colors.grey[100],
        },
        "&:hover": {
          color: colors.greenAccent[400],
        },
        color: colors.grey[100],
      }}
    >
      <Icon style={{ width: "16px" }} />
      {(open || isMobile) && (
        <Typography sx={{ ml: 1, whiteSpace: "nowrap" }}>{title}</Typography>
      )}
    </ListItemButton>
  );
};

function Sidebar({width}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(!isMobile); // mobile closed first load
  const [selected, setSelected] = useState(
    localStorage.getItem("selectedItem") || "Dashboard"
  );
 

  useEffect(() => {
    const currentWidth = isMobile ? 0 : (open ? drawerWidth : collapsedWidth);
    width(currentWidth); 
  }, [open, isMobile]);
  
  





  useEffect(() => {
    localStorage.setItem("selectedItem", selected);
  }, [selected]);

  const toggleDrawer = () => setOpen((prev) => !prev);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      {isMobile && (
        <Toolbar
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            backgroundColor: colors.primary[900],
            zIndex: 50,
            width: "100%",
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{ color: colors.grey[100] }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2, color: colors.grey[100] }}>
            My App
          </Typography>
        </Toolbar>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : collapsedWidth,
            boxSizing: "border-box",
            backgroundColor: colors.primary[400],
            color: "white",
            overflowX: "hidden",
            transition: "width 0.3s",
          },
        }}
      >
        {/* Toolbar with toggle button */}
        <Toolbar sx={{ display: "flex", justifyContent: open ? "flex-end" : "center" }}>
          {!isMobile && (
            <IconButton onClick={toggleDrawer} sx={{ color: colors.grey[100] }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        {/* Profile section */}
        {open && (
          <Box mb="15px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                src="/images/profile-img.jpg"
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  objectFit: "cover",
                  width: "65px",
                  height: "65px",
                }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                A H
              </Typography>
            </Box>
          </Box>
        )}

        {/* Sidebar Items */}
        <List>
          {SidebarItems.map((item) => (
            <SidebarItem
              key={item.title}
              title={item.title}
              Icon={item.Icon}
              to={item.to}
              selected={selected}
              setSelected={setSelected}
              open={open}
              isMobile={isMobile}
              closeDrawer={closeDrawer}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
