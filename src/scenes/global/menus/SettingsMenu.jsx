import React from "react";
import { Menu, MenuItem } from "@mui/material";

function SettingsMenu({ anchorEl, open, onClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={onClose}>Account Settings</MenuItem>
      <MenuItem onClick={onClose}>Theme</MenuItem>
    </Menu>
  );
}

export default SettingsMenu;
