import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const[title, setTitle] = useState('');
    const[amount, setAmount] = useState('');
    const[date, setDate] = useState('');

    const textChange = (event) =>{
        //console.log(event.target.value);
        setTitle(event.target.value);
    }

    const amountChange = (event) =>{
        setAmount(event.target.value);
    }

    const dateChange = (event) =>{
        setDate(event.target.value)
    }

    const formSubmit = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };
        
        //console.log(expenseData);
        console.log('From ExpenseForm.js');
        props.onSaveExpenseData(expenseData); // The "expenseData" object is ready to be passed to main component
        
        setTitle('');
        setAmount('');
        setDate('');
    };

    

    return(
        <form onSubmit = {formSubmit}>
            <div className = 'new-expense_controls'>
                <div className = 'new-expense_control'>
                    <label>Title</label>
                    <input type = 'text' value = {title} onChange = {textChange} />
                </div>
                <div className = 'new-expense_control'>
                    <label>Amount</label>
                    <input type = 'number' min = '0.01' step = '0.01' value = {amount} onChange = {amountChange} />
                </div>
                <div className = 'new-expense_control'>
                    <label>Date</label>
                    <input type = 'date' min = '2019-01-01' max = '2023-12-31' value = {date} onChange = {dateChange} />
                </div>
            </div>
            <div className = 'new-expense_actions'>
                <button onClick = {props.killAll}>Cancel</button>
                <button type = 'submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;