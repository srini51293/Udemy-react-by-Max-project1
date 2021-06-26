import React from 'react'
import Card from '../UI/Card'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
const ExpenseItem=(props)=> {
  //const [titleup,setTitleup]=useState(props.titles);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.titles}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
