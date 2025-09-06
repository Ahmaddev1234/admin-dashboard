import React from "react";
import { Menu, MenuItem } from "@mui/material";

function NotificationsMenu({ anchorEl, open, onClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={onClose}>New comment</MenuItem>
      <MenuItem onClick={onClose}>System update</MenuItem>
      <MenuItem onClick={onClose}>Message from Admin</MenuItem>
    </Menu>
  );
}

export default NotificationsMenu;
