import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import  AdminPanelSettingsOutlined  from '@mui/icons-material/AdminPanelSettingsOutlined'
import  LockOpenOutlined  from '@mui/icons-material/LockOpenOutlined'
import  SecurityOutlined  from '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header'
const index = () => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const columns= [
        {field:"id", headerName:"ID"},
        {field:"name", headerName:"NAME", flex:1, cellClassName:"name-cell"},
        {field:"email", headerName:"EMAIL",flex:1 },
        {field:"age", headerName:"AGE", type:"number", headerAlign:"left", align:"left"},
        {field:"phone", headerName:"PHONE", flex:1},
        {field:"access", headerName:"ACCESS LEVEL", flex:1, cellClassName:"accesstab", renderCell:({row:{access}})=>(

            <Box width="60%" m="0,auto" p="5px" display="flex" justifyContent="center" justifyItems="center"
            backgroundColor={access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700] }
            borderRadius="4px"
            >
                {access === "admin" && <AdminPanelSettingsOutlined/>}
                {access === "manager" && <SecurityOutlined/>}
                {access === "user" && <LockOpenOutlined/>}
                <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
                    {access}
                </Typography>
            </Box>
        )},
    ]
  return (
    <Box m="20px">
      <Header title="Team" subtitle="Managing the team members"/>
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
        sx={{
            border: "none",
            "& .MuiDataGrid-cell":{
                border:"none"
            },
            "& .name-cell":{
                color:colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders":{
                borderBottom:"none !important",
                "--DataGrid-t-header-background-base": colors.blueAccent[700] || "#1976d2"
            },
            "& .MuiDataGrid-virtualScroller":{
                backgroundColor:colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer":{
                borderTop:"none",
                backgroundColor:colors.blueAccent[700]
            },
            "& .accesstab":{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }
        }}
        rows={mockDataTeam}
        columns={columns}
        />
      </Box>
    </Box>
  )
}

export default index
