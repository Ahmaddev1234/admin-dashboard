import React from 'react'
import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'
const index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5,minWidth:70 },
    { field: "name", headerName: "NAME", flex: 1, cellClassName: "name-cell", minWidth:100 },
    { field: "registrarId", headerName: "REGISTRAR ID", minWidth:100 },
    { field: "email", headerName: "EMAIL", flex: 1, minWidth:200 },
    { field: "age", headerName: "AGE", type: "number", headerAlign: "left", align: "left", minWidth:50 },
    { field: "phone", headerName: "PHONE", flex: 1, minWidth:100 },
    { field: "address", headerName: "ADDRESS", flex: 1, minWidth:200 },
    { field: "city", headerName: "CITY", flex: 1, minWidth:100 },
    { field: "zipCode", headerName: "ZIP CODE",headerAlign:"left", flex: 1, minWidth:70,renderHeader: () => (
      <div style={{ whiteSpace: "normal", lineHeight: "1.2", textAlign: "left" }}>
        ZIP<br/>CODE
      </div>
    ),},

  ]
  return (
    <Box m="20px" flex={1} width="full">
      <Header title="Contacts" subtitle="List of Contacts of team members" />
      <Box  height="75vh" m="40px 0 0 0" sx={{width:{xs:"90vw",md:"100%"}}} overflowX="scroll" display="flex">
        <DataGrid
          sx={{
            border: "none",
            "& .MuiDataGrid-cell": {
              border: "none"
            },
            "& .name-cell": {
              color: colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "none !important",
              "--DataGrid-t-header-background-base": colors.blueAccent[700] || "#1976d2"
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700]
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            }
          }}
          rows={mockDataContacts}
          slots={{ toolbar: GridToolbar }}
          showToolbar
          slotProps={{
            toolbar: {
              showQuickFilter: true,  
              quickFilterProps: { debounceMs: 500 },
            },
          }}

          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default index
