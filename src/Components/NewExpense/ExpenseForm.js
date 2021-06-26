import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm=(props)=>
{
    const [enteredTitle,setEnterTitle]=useState('');
    const [enteredAmount,setEnterAmount]=useState('');
    const [enteredDate,setEnterDate]=useState('');
    /*const [userInput,setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });*/
    const titleChangeHandler=(event)=>
    {
         setEnterTitle(event.target.value);
       /* setUserInput((prevState)=>{
           return {
                ...prevState,
                enteredTitle:event.target.value
            };
        })*/
        /*setUserInput({...userInput,
            enteredTitle:event.target.value
        });*/
    }
    const amountChangeHandler=(event)=>{
         setEnterAmount(event.target.value);
        /*setUserInput({...userInput,
            enteredAmount:event.target.value
        });*/
    }
    const dateChangeHandler=(event)=>{
         setEnterDate(event.target.value);
        /*setUserInput({...userInput,
            enteredDate:event.target.value
        });*/
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:parseInt(enteredAmount),
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnterAmount('');
        setEnterTitle('');
        setEnterDate('');
    } 
            return( 
                 <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
        );
        
}
export default ExpenseForm;