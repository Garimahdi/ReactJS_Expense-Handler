// Import the custom component (ExpenseItem.js)
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense';
import React, {useState} from 'react';

const DUMMY_LIST=  [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020,7,14)
  },
  {
    id:'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021,2,12)
  },
  {
    id:'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021,2,28)
  },
  {
    id:'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021,5,12)
  }
];

const App = ()=> {
  /* 
  const expenses=  [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020,7,14)
    },
    {
      id:'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021,2,12)
    },
    {
      id:'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021,2,28)
    },
    {
      id:'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021,5,12)
    }
  ];
 */

  const [pushExpense, setPushExpense] = useState(DUMMY_LIST);

  const addExpenseHandler = (expense) =>{ // The param refers to 'newExpenseData' dictionary
    console.log('In App.js');
    console.log(expense);
    setPushExpense(prevState =>{
      return [expense, ...prevState];
    });
  }

  return (
    // Now try to import the ExpenseItem custom component
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses expenseItem = {pushExpense}/>
    </div>
  );
  

  // JSX under the bonnet
  /* return(
    React.createElement('div',{},
    React.createElement('h2',{},'Less Goo'),
    React.createElement(Expenses,{expenseItem:expenses}))
  );
   */
}

export default App;
