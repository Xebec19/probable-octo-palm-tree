import "./ExpenseItem.css";
import Card from './Card.js';
const ExpenseItem = (props) => {
  const { title } = props;
  const expenseDate = new Date();
  return (
    <Card className="expense-item">
      <span className="expense-item__start">
        <h1 className="expense-item__title">{title}</h1>
      </span>
      <span className="expense-item__end">
        <h1 className="button">$43</h1>
        <h2 className="expense-item__date">{expenseDate.toISOString()}</h2>
      </span>
    </Card>
  );
};

export default ExpenseItem;
