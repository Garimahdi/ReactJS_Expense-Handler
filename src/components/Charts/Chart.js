import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) =>{
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.sum);
    const maxExpense = Math.max(...dataPointValue);

    return(
        <div className='chart'>
            {props.dataPoints.map(dataPoint =>{
                return(
                    <ChartBar
                    key = {dataPoint.label}
                    sum = {dataPoint.sum}
                    maxSum = {maxExpense}
                    label = {dataPoint.label} />
                )
            })}
        </div>
    )
}

export default Chart;