import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) =>{
    if(props.assorted.length === 0){
        return(<p className = 'expense-list__fallback'>No expenses found</p>)
    }else{
        return(
            <ul className = 'expense-list'>
                {props.assorted.map(expenseMapping =>{
                    return(
                        <ExpenseItem
                        key = {expenseMapping.id}
                        date = {expenseMapping.date}
                        title = {expenseMapping.title}
                        amount = {expenseMapping.amount}/>
                    )
                })}
            </ul>
        );
    }
};

export default ExpenseList;