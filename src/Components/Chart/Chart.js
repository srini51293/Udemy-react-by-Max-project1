import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointValue=props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxium=Math.max(...dataPointValue);
    console.log(totalMaxium);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          max={totalMaxium}
        />;
      })}
    </div>
  );
};

export default Chart;
