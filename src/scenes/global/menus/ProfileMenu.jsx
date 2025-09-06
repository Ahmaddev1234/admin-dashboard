import React from "react";
import { Menu, MenuItem } from "@mui/material";

function ProfileMenu({ anchorEl, open, onClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={onClose}>My Profile</MenuItem>
      <MenuItem onClick={onClose}>Logout</MenuItem>
    </Menu>
  );
}

export default ProfileMenu;
