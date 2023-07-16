import React from "react";

import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import Card from '../UI/Card'

const Expenses = (props) => {
    const expensesobj = [
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
        amount: 5600,
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
      }
    ];

  return (
    <Card className="expense">
      <div>
        {expensesobj.map((obj) => {
          return <ExpenseItem key={Math.random()} items={obj} />;
        })}
      </div>
    </Card>
  );
}
export default Expenses;
