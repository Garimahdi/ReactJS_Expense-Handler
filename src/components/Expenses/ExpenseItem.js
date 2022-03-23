// To apply css file in React, import it first
import './ExpenseItem.css'; // By doing this, the css file should be considered
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';

function ExpenseItem(props) {
    //const expenseDate = new Date(2021, 2, 28); // To make dynamic data (kinda),
    //const expenseTitle = 'Car Insurance'; //      this is still considered as "hard-coded" script.
    //const expenseAmount = 294.67; //              The data isn't dynamic

    console.log('ExpenseItem component evaluated by ReactJS'); // This line will run 4x since there are 4 ExpenseItem component called simultaneously
    
    // Onclick event function
    let goods = props.title; // Pre-defined value, the code is more neat this way
    /* const [title, setTitle] = useState(goods); // This can't be called outside the component function. Returns an array with 2 obj
    
    const clickHandler = ()=>{
        //window.alert('Clicked');
        //title = 'Sike!' // The title cannot be updated this way, since React doesn't repeat the rendering process once it's done
        setTitle('Sike!'); // This way, the value inside the <h2> tag will change when the event is fired-up
        console.log(title); // It gets the last value before it is changed by a click on button. It is scheduled
    } */
    //Only for state demonstration purpose, can be activated again for review

    return(
        <li> {/* Add list tag for semantic reason, since ExpenseList component is set to unordered list <ul> */}
            <Card className = 'expense-item'>
                <ExpenseDate date = {props.date}/>
                <div className = 'expense-item_description'>
                    <h2>{goods}</h2>
                    <div className = 'expense-item_price'>
                        $ {props.amount.toLocaleString('en-US',{style:'currency', currency:'USD'}).slice(1,)}
                    </div>
                </div>
                {/*<button onClick = {clickHandler}>Change title</button> {/* Don't add () after function name yet if the function needs event to run it */}
            </Card>
        </li>
    );
}

export default ExpenseItem; // To make this ExpenseItem custom component reusable