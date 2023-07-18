import React, {useState} from "react";

import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState(0);

  const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
      //console.log(selected);
      //console.log(selected);
    
  };
   const filteredExpenses = props.items.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
   })

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
         
    
        {
          filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
            date={expense.date}
          />
          ))
        }
        
      </div>
    </Card>
  );
}
export default Expenses;
