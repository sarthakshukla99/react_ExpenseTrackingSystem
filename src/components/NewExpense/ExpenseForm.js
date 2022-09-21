import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    // props.onCancel(false)

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title,
            amount,
            date: new Date(date)
        };
        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }

    // const cancelFormHandler = (e) => {
    //     props.onCancel(false)
    // }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} 
                    required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        // min={1.0}
                        // step="0.1"
                        value={amount}
                        onChange={amountChangeHandler}
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2023-12-31"
                        value={date}
                        onChange={dateChangeHandler}
                        required
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
