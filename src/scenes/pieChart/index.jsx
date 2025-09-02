import React from 'react'
import PieChart from '../../components/PieChart'
import { Box } from '@mui/material'
import Header from '../../components/Header'
const index = () => {
  return (
    <Box m="20px" height="75vh">
      <Header title="PieChart" subtitle="PieChart data page" />
      <PieChart/>
    </Box>
  )
}

export default index
