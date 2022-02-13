import ExpenseItem from "./components/ExpenseItem";
const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.23, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 245.48, date: new Date(2021, 2, 2) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title}></ExpenseItem>
      {/* <ExpenseItem></ExpenseItem> */}
    </div>
  );
};

export default App;
