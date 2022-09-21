import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const { expenses } = props;

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let noExpenseData = <h2 style={{textAlign:'center', color: 'white'}}>
            No expenses found.
         </h2>

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>

                {filteredExpenses.length === 0 && noExpenseData }

                {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;
