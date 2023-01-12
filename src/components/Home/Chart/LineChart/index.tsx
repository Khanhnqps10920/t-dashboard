import { Line, ResponsiveLine } from "@nivo/line";
import data from "./testData";

const LineChart = () => {
    console.log(data);

  return (
    <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
    }}

    />
  );
};

export default LineChart;