import React from 'react'
import { Box, useTheme } from '@mui/material'
import { mockBarData as data } from '../../data/mockData'
import { ResponsiveBar } from '@nivo/bar'
import { tokens } from '../../theme'
const BarChart = ({isDashboard=false}) => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
  return (
    
        
    <ResponsiveBar 
        
        data={data}
        keys={["hot dog", "burger", "kebab", "donut"]} 

        theme={{
            
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
          }}

        indexBy="country"
        padding={0.3}
        enableLabel={false}
        labelSkipHeight={12}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 120,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 16
            }
        ]}
        axisBottom={{ legend: 'country (indexBy)', legendOffset: 32 }}
        axisLeft={{ legend: 'food', legendOffset: -40 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    />
    
  )
}

export default BarChart
