import React from 'react'
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import ProfileMenu from "./menus/ProfileMenu";
import SettingsMenu from "./menus/SettingsMenu";
import NotificationsMenu from "./menus/NotificationsMenu"
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'




function Topbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    const [anchorProfile, setAnchorProfile] = useState(null);
    const [anchorSettings, setAnchorSettings] = useState(null);
    const [anchorNotifications, setAnchorNotifications] = useState(null);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search bar */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">

                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
                <IconButton type='button' sx={{ p: 1 }} >
                    <SearchIcon />
                </IconButton>


            </Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>

                    {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
                </IconButton>
                <IconButton onClick={(e) => setAnchorNotifications(e.currentTarget)}>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <NotificationsMenu
                    anchorEl={anchorNotifications}
                    open={Boolean(anchorNotifications)}
                    onClose={() => setAnchorNotifications(null)}
                />
                <IconButton onClick={(e) => setAnchorSettings(e.currentTarget)} >
                    <SettingsOutlinedIcon />
                </IconButton>
                <SettingsMenu
                    anchorEl={anchorSettings}
                    open={Boolean(anchorSettings)}
                    onClose={() => setAnchorSettings(null)}
                />
                <IconButton onClick={(e) => setAnchorProfile(e.currentTarget)}>
                    <PersonOutlinedIcon />
                </IconButton>
                <ProfileMenu
                    anchorEl={anchorProfile}
                    open={Boolean(anchorProfile)}
                    onClose={() => setAnchorProfile(null)}
                />
            </Box>
        </Box>
    )
}

export default Topbar
