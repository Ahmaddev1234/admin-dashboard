import React from 'react'
import { Box, Toolbar, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'
const index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "NAME", flex: 1, cellClassName: "name-cell" },
    { field: "registrarId", headerName: "REGISTRAR ID" },
    { field: "email", headerName: "EMAIL", flex: 1 },
    { field: "age", headerName: "AGE", type: "number", headerAlign: "left", align: "left" },
    { field: "phone", headerName: "PHONE", flex: 1 },
    { field: "address", headerName: "ADDRESS", flex: 1 },
    { field: "city", headerName: "CITY", flex: 1 },
    { field: "zipCode", headerName: "ZIP CODE", flex: 1 },

  ]
  return (
    <Box m="20px">
      <Header title="Contacts" subtitle="List of contacts for future reference" />
      <Box m="40px 0 0 0" height="75vh">
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
          slotProps={{
            toolbar: {
              showQuickFilter: true,   // adds search box
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
