import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
function Expenses(props) {
  return (
    <Card>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          tittle={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
 
    </Card>
  );
}
export default Expenses;
