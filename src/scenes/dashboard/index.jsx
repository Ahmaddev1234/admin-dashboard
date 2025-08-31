import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'

function index() {
  return (
    <Box m="20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Header title="Dashboard" subtitle="Welcome to your dashboard"/>
      </Box>
    </Box>
  )
}

export default index
