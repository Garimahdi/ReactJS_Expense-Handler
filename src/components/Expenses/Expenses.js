//import ExpenseItem from './ExpenseItem.js'; --> Migrated to "ExpenseList.js" file to keep the code lean 
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import Card from '../UI/Card';
import React, {useState} from 'react';

function Expenses(props){
    const items = props.expenseItem;

    const [filteredYear, setFilteredYear] = useState('--All--');
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }
    /* 
    const annualExpense = [];
    items.forEach(expense =>{
        if(expense.date.getFullYear().toString() === filteredYear){
            annualExpense.push(expense);
        }
    })
    */
    // Or can be done this way
    const annualExpense = items.filter(yearFilter =>{
        return (yearFilter['date'].getFullYear().toString() === filteredYear)
    });

    // These are hard-coded JSX components, Which means that these are not dynamic
    /* 
    return(
        <div>
            <Card className = 'expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem 
                date = {items[0]['date']} 
                title = {items[0]['title']}
                amount = {items[0]['amount']}/>

                <ExpenseItem
                date = {items[1]['date']} 
                title = {items[1]['title']}
                amount = {items[1]['amount']}/>

                <ExpenseItem
                date = {items[2]['date']}
                title = {items[2]['title']}
                amount = {items[2]['amount']}/>

                <ExpenseItem
                date = {items[3]['date']}
                title = {items[3]['title']}
                amount = {items[3]['amount']}/>
            </Card>    
        </div>
    );
    */

    // To make the component dynamic, use map function
    if(filteredYear === '--All--'){
        return(
            <div>
                <Card className='expenses'>
                    <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
                    <ExpensesChart expenses = {items} />
                    <ExpenseList assorted = {items} />
                </Card>
            </div>
        );
    }else{
        return(
            <div>
                <Card className = 'expenses'>
                    <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
                    <ExpensesChart expenses = {annualExpense} />
                    <ExpenseList assorted = {annualExpense} />
                </Card>
            </div>
        )
    }

}

export default Expenses;