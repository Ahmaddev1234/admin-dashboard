import React, {  useState,useEffect } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  Typography,
  IconButton,
  useTheme,
  Toolbar,
  Box,
  useMediaQuery
} from "@mui/material";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import { tokens } from "../../theme";
import { SidebarItems } from "../../data/mockData";

const drawerWidth = 240;
const collapsedWidth = 60;

const Items = ({ title, to, Icon, selected, setSelected, open,isMobile }) => {
  const theme=useTheme()
  const colors = tokens(theme.palette.mode);
  return (
    <ListItemButton
      selected={selected === title}
      onClick={() => setSelected(title)}
      component={Link}
      to={to}
      sx={{
        justifyContent: open || isMobile ? "initial" : "center",
        mt:isMobile ? "10px" : "0px",
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
          // backgroundColor: "#1976d2",
          color: colors.greenAccent[400],
        },
        color: colors.grey[100],
      }}
    >
      <Icon style={{ width: "16px" }} />
      {isMobile?(
        <Typography sx={{ ml: 1, whiteSpace: "nowrap" }}>{title}</Typography>
      ):open && (
        <Typography sx={{ ml: 1, whiteSpace: "nowrap" }}>{title}</Typography>
      )}
    </ListItemButton>
  );
};

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem("selectedItem") || "Dashboard";
  });

  useEffect(() => {
    localStorage.setItem("selectedItem", selected);
  }, [selected]);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  useEffect(()=>{
    setOpen(!open)
  },[selected])
  
  
  return (
    <>
    {isMobile ? 
    <>
    <Toolbar sx={{ position:"absolute", left:0,top:0, backgroundColor:colors.primary[900], zIndex:50, width:"100%" }}>
      <IconButton onClick={toggleDrawer} sx={{ color: colors.grey[100] }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" sx={{ ml: 2, color: colors.grey[100] }}>
        My App
      </Typography>
    </Toolbar>

    
    <Drawer
    variant="temporary"
    anchor="left"
    open={!open}
    onClose={toggleDrawer}
    sx={{
      width:  drawerWidth,
      
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
        backgroundColor: colors.primary[400],
        color: "white",
        overflowX: "hidden",
        transition: "width 0.3s",
      },
    }}
  >
    {/* Top toolbar with toggle button */}
    
    {open && (
      <Box mb="15px">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width="100px"
            height="100px"
            src='/images/profile-img.jpg'
            style={{ cursor: "pointer", borderRadius: "50%", objectFit: "cover", width: "65px", height: "65px", objectPosition: "start" }}
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



    <List  >
      {SidebarItems.map((item) => (
        <Items
          key={item.title}
          title={item.title}
          Icon={item.Icon}
          to={item.to}
          selected={selected}
          setSelected={setSelected}
          open={open}
          isMobile={isMobile}
        />
      ))}
    </List>
  </Drawer> </> :(
      <Drawer
    variant="permanent" 
    anchor="left"
    open={open}
    onClose={toggleDrawer}
    sx={{
      width:  open ? drawerWidth : collapsedWidth,
      
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
    {/* Top toolbar with toggle button */}
    <Toolbar sx={{ display: "flex", justifyContent: open ? "flex-end" : "center" }}>
      <IconButton onClick={toggleDrawer} sx={{ color: colors.grey[100] }}>
        <MenuIcon />
      </IconButton>
    </Toolbar>
    {open && (
      <Box mb="15px">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width="100px"
            height="100px"
            src='/images/profile-img.jpg'
            style={{ cursor: "pointer", borderRadius: "50%", objectFit: "cover", width: "65px", height: "65px", objectPosition: "start" }}
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



    <List  >
      {SidebarItems.map((item) => (
        <Items
          key={item.title}
          title={item.title}
          Icon={item.Icon}
          to={item.to}
          selected={selected}
          setSelected={setSelected}
          open={open}
          isMobile={isMobile}
        />
      ))}
    </List>
  </Drawer>
    )}
   
    
    
   </>
   
  );
}

export default Sidebar;
