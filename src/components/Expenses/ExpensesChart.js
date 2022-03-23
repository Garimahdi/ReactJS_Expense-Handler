import React from 'react';
import Chart from '../Charts/Chart';

const ExpensesChart = (props) =>{
    const monthlyExpense = [
        {label:'Jan', sum:0},
        {label:'Feb', sum:0},
        {label:'Mar', sum:0},
        {label:'Apr', sum:0},
        {label:'May', sum:0},
        {label:'Jun', sum:0},
        {label:'Jul', sum:0},
        {label:'Aug', sum:0},
        {label:'Sep', sum:0},
        {label:'Oct', sum:0},
        {label:'Nov', sum:0},
        {label:'Dec', sum:0}
    ];
    for(const i of props.expenses){
        const monthCost = i['date'].getMonth();
        monthlyExpense[monthCost]['sum'] += i['amount'];
    };

    return(
        <Chart dataPoints = {monthlyExpense} />
    )
}

export default ExpensesChart;