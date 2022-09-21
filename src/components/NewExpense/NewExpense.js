import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
    const [formVisibility, setFormVisibility] = useState(false);

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    const handleFormVisibility = () => {
        setFormVisibility(true)
    }

    const handleCancelForm = () => {
        setFormVisibility(false)
    }

    return (
        <div className="new-expense">
            {/* {!formVisibility ? <button>Add new Expense</button>: '' } */}
            {formVisibility ? <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={handleCancelForm} /> : <button onClick={handleFormVisibility}>Add new Expense</button>}
        </div>
    );
}

export default NewExpense;
