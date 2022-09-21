import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'


function Expenses(props) {
    const {expenses} = props
    return (
        <Card className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id}
                />
            ))}
        </Card>
    );
}

export default Expenses;
