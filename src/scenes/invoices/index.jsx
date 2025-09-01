import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataInvoices } from '../../data/mockData'
import Header from '../../components/Header'
const index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "NAME", flex: 1, cellClassName: "name-cell" },
    { field: "email", headerName: "EMAIL", flex: 1 },
    { field: "phone", headerName: "PHONE", flex: 1 },
    { field: "cost", headerName: "COST", type: "number",headerAlign: "left", cellClassName:"cost-cell", renderCell:(params)=>(
      <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
    ) },
    { field: "date", headerName: "Date", flex: 1 },
]
  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="List of Invoice balances" />
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
            "& .cost-cell":{
                display:"flex",
                justifyContent:"start",
                alignItems:"center"
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            }
          }}
          rows={mockDataInvoices}
          checkboxSelection
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default index
