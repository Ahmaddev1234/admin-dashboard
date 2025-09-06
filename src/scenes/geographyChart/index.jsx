import React from 'react'
import { Box } from '@mui/material'
import GeographyChart from '../../components/GeographyChart'
import Header from '../../components/Header'
const index = () => {
  return (
    <Box m="20px" height="75vh">
      <Header title="Geography chart" subtitle="Geographical view of location" />
      <GeographyChart/>
    </Box>
  )
}

export default index
