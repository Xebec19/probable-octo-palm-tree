import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const { title } = props;
  const expenseDate = new Date();
  return (
    <div className="expense-item">
      <span className="expense-item__start">
        <h1 className="expense-item__title">{title}</h1>
      </span>
      <span className="expense-item__end">
        <h1 className="button">$43</h1>
        <h2 className="expense-item__date">{expenseDate.toISOString()}</h2>
      </span>
    </div>
  );
};

export default ExpenseItem;
