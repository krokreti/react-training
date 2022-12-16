import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

function Chart(props) {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    // o spread esta tirando todos os elemendos do array e colocando como se fossem valores individuais
    const totalMaximum = Math.max(...dataPointValue);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
            ))}
        </div>)
}

export default Chart