import React, {useState} from "react";

import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
      //console.log(selected);
      //console.log(selected);
    
  };
   const filteredExpenses = props.items.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
   })

   let expensesContent = <p>No Expenses Found</p>;
   if(filteredExpenses.length >0 ){
    expensesContent =  filteredExpenses.map((expense)=>{
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
  
      );
      
    });
   }

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
          // if(filteredExpenses.length === 1){

          // }
          filteredExpenses.length === 1 && expensesContent && (
            <p>Only single Expense here. Please add more...</p>
          )
        }
        {expensesContent}
      </div>
    </Card>
  );
}
export default Expenses;
