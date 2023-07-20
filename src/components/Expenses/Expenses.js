import React, {useState} from "react";

import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";
import Expenseschart from "./ExpensesChart";

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

   let expensesContent = <h2>No Expenses Found</h2>;
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
        <Expenseschart expenses={filteredExpenses} />

        {/* {expenses.map((obj) => {
          return <ExpenseItem key={Math.random()} items={obj} />;
        })} */}

        {
          // if(filteredExpenses.length === 1){

          // }
          filteredExpenses.length === 1 && expensesContent && (
            <h2>Only single Expense here. Please add more...</h2>
          )
        }
        {expensesContent}
      </div>
    </Card>
  );
}
export default Expenses;
