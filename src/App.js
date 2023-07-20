import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import  "./components/Expenses/ExpenseItem.css";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 56.73,
    date: new Date(2023, 6, 22),
    location: "Hyderabad",
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 236.85,
    date: new Date(2023, 5, 12),
    location: "Warangal",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 524.63,
    date: new Date(2021, 3, 21),
    location: "Bangalore",
  },
  {
    id: "e4",
    title: "Wooden Desk ",
    amount: 452.36,
    date: new Date(2022, 4, 16),
    location: "Hyderabad",
  },
];



const App =() => {

 const[ expenses, setExpenses ]= useState(DUMMY_EXPENSES)
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses]
    });

  };
  
  
  return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses} />
      </div>
  );

}

export default App;
