import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMYEXPENSES = [
  {
    id: "e1",
    title: "Car Insurance 1",
    amount: 100,
    date: new Date(2021, 1, 27),
  },
  {
    id: "e2",
    title: "Car Insurance 2",
    amount: 250.25,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e3",
    title: "Car Insurance 3",
    amount: 485.368,
    date: new Date(2010, 3, 29),
  },
  {
    id: "e4",
    title: "Car Insurance 4",
    amount: 300,
    date: new Date(2020, 4, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);

  const addExpenseHandler = (expense) => {
    // Use the previous expenses to update the list because it depends on the previous snapshot
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });
    // setExpenses([expense, ...expenses]);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
