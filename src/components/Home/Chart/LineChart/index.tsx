import { Line, ResponsiveLine } from "@nivo/line";
import { Defs, linearGradientDef } from "@nivo/core";
import { generateDrinkStats } from '@nivo/generators'
// import data from "./testData";

const data = generateDrinkStats(8);

const LineChart = () => {
    console.log(data);
    const commonProperties = {
      width: 900,
      height: 400,
      margin: { top: 20, right: 20, bottom: 60, left: 80 },
      data,
      animate: true,
      enableSlices: 'x',
    }
  return (
//     <ResponsiveLine
//     data={data}
//     margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//     xScale={{ type: 'point' }}
//     yScale={{
//         type: 'linear',
//         min: 'auto',
//         max: 'auto',
//         stacked: true,
//         reverse: false
//     }}
//     axisTop={null}
//     axisRight={null}
//     axisBottom={null}
//     axisLeft={null}
//     enableGridX={false}
//     enableGridY={false}
//     colors={{ scheme: 'nivo' }}
//     enablePoints={false}
//     pointSize={10}
//     pointColor={{ theme: 'background' }}
//     pointBorderWidth={2}
//     pointBorderColor={{ from: 'serieColor' }}
//     pointLabelYOffset={-12}
//     enableArea={true}
//   fill={[{ match: '*', id: 'gradientA' }]}
//     areaBaselineValue={0}
//     areaOpacity={0.05}
//     useMesh={true}
//     legends={[
//       {
//           anchor: 'bottom-right',
//           direction: 'row',
//           justify: false,
//           translateX: 41,
//           translateY: 25,
//           itemsSpacing: 0,
//           itemDirection: 'left-to-right',
//           itemWidth: 80,
//           itemHeight: 20,
//           itemOpacity: 0.75,
//           symbolSize: 12,
//           symbolShape: 'circle',
//           symbolBorderColor: 'rgba(0, 0, 0, .5)',
//           effects: [
//               {
//                   on: 'hover',
//                   style: {
//                       itemBackground: 'rgba(0, 0, 0, .03)',
//                       itemOpacity: 1
//                   }
//               }
//           ]
//       }
//   ]}
// />
<Line 
data={data}
width={1000}
height={350}
margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
animate={true}
enableSlices={'x'}
enableArea={true}
curve={'linear'}
yScale={{
  type: 'linear',
  stacked: true,
}}
defs={[
linearGradientDef('gradientA', [
{ offset: 0, color: 'inherit' },
{ offset: 100, color: 'inherit', opacity: 0 },
]),
]}
fill={[{ match: '*', id: 'gradientA' }]}
sliceTooltip={({ slice }) => {
  return (
      <div
          style={{
              background: 'white',
              padding: '9px 12px',
              border: '1px solid #ccc',
              fontSize: '1.5rem'
          }}
      >
          {slice.points.map(point => (
              <div
                  key={point.id}
                  style={{
                      color: point.serieColor,
                      padding: '3px 0',
                  }}
              >
                  <strong>{point.serieId}</strong> {point.data.yFormatted}
              </div>
          ))}
      </div>
  )
}}
/>
  );
};

export default LineChart;