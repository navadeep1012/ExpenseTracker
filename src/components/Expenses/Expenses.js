import React, {useState} from "react";

import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

    


  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {expenses.map((obj) => {
          return <ExpenseItem key={Math.random()} items={obj} />;
        })} */}
        {/* {
          props.items.map((expense) =>  {
            <ExpenseItem
            key = {Math.random()}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
            location = {expense.location}
          }
          />)} */}

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
            date={expense.date}
          />
        ))}
      </div>
    </Card>
  );
}
export default Expenses;
