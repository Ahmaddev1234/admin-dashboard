import React from 'react'
import Barchart from '../global/Barchart.jsx'
import { Box } from '@mui/material'
import Header from '../../components/Header'
const index = () => {
  return (
    <Box height="75vh" p="20px">
      <Header title="BarChart" subtitle="full detailed Barchart" />
      <Barchart/>
    </Box>
  )
}

export default index
