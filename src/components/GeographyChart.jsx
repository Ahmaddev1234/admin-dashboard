import React from 'react'
import { useTheme } from "@mui/material";
import { tokens } from '../theme'
import { ResponsiveChoropleth } from '@nivo/geo'
import { mockGeographyData as data } from '../data/mockData'
import { geoFeatures } from '../data/mockJeoFeatures'

const GeographyChart = ({isDashboard=false}) => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
  return (
    <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
        data={data}

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

            tooltip: {
                container: {
                  background: colors.primary[400],   // background color of tooltip
                  color: colors.grey[100],           // text color
                  fontSize: 12,
                  borderRadius: "8px",
                  padding: "6px 10px",
                },
              },
          }}

        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={isDashboard ? undefined :([
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.grey[1],
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ])
    }
    />
  )
}

export default GeographyChart
