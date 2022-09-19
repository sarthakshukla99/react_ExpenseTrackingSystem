import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {

    // const expenseDate = new Date(2023, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 299;

  return (
    <div>
        <div className='expense-item'>
            <div>{props.date.toDateString()} </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount} </div>
            </div>
        </div>
    </div>
  )
}

export default ExpenseItem