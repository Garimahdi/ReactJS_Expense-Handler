import React from 'react';
import './ChartBar.css';

const ChartBar = (props) =>{
    let chart = '0%';
    if(props.sum > 0){
        chart = Math.round((props.sum/props.maxSum)*100)+'%';
    }

    return(
        <div className='chart-bar'>
            <div className='chart-bar_inner'>
                <div className='chart-bar_fill' style={{height:chart}} />
            </div>
            <div className='chart-bar_label'>{props.label}</div>
        </div>
    );
};

export default ChartBar;