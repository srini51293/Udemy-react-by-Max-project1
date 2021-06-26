import React , { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense=(props)=>
{
    const [isEditing,setIsEditing]=useState(false);
    const onSaveExpenseDataHandler=(enterExpenseData)=>
    {
        const expenseData={
            ...enterExpenseData,
            id:Math.random().toString()
        }
        props.newExpenseSubmit(expenseData);
        setIsEditing(false);
    }
    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
    return <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}  onCancel={stopEditingHandler}/>}
    </div>
}
export default NewExpense;