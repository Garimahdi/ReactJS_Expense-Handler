import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

// The goal of this component is to return a form for the input

const NewExpense = (props) =>{

    const [fillForm, setFillForm] = useState(false); // False for not showing targeted element

    const saveExpenseDataHandler = (enteredExpenseData) =>{ // The param will refer to 'expenseData' dictionary from props.onSaveExpenseData()"
        const newExpenseData = {
            ...enteredExpenseData,
            id: 'e'+Math.random().toString().slice(2,6)
        };
        //console.log(newExpenseData);
        console.log('To NewExpense.js');
        /*
        The 'newExpenseData' is planned to pass to the 'Expenses.js', 'newExpenseData' data need to be passed
        to the nearest parent first, which is 'App.js'
        */
        props.onAddExpense(newExpenseData);
        setFillForm(false); // Hide the form when the submit button is clicked
    };

    const startFill = () =>{
        setFillForm(true);
    };

    const stopFill =() =>{
        setFillForm(false);
    };

    //console.log(fillForm);
    
    if (!fillForm){ // This means "fillForm === false"
        return(
            <div className = 'new-expense'>
                <button onClick = {startFill}>Insert new expense item</button>
            </div>
        )
    }else{
        return(
            <div className = 'new-expense'>
                <ExpenseForm 
                onSaveExpenseData = {saveExpenseDataHandler}
                killAll = {stopFill} />
            </div>
        )
    }
   

    // Or can be done this way (Making conditionals without any conditional statement)
    /* 
    return(
        <div className = 'new-expense'>
            {!fillForm &&(
                <button onClick = {startFill}>Insert new expense item</button>
                // Human language: "I'll show this button if the current state value is {false}"
            )}
            
            {fillForm &&(
                <ExpenseForm
                onSaveExpenseData = {saveExpenseDataHandler}
                killAll = {stopFill} />
                // Human language: "I'll show the form if the current state value is {true}" 
            )}
        </div>
    )
    */
};

export default NewExpense;