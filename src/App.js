//import ExpenseItem from "./components/ExpenseItems";
import Expenses from "./components/Expenses/Expenses";
//import Card from "./components/UI/Card";
import  "./components/Expenses/ExpenseItem.css";
//import ExpenseForm from "./components/NewExpense/ExpenseForm";
import NewExpense from "./components/NewExpense/NewExpense";


const App =() => {

  const addExpenseHandler = expense => {
    console.log('In App');
    console.log(expense);
  };
  
  
  return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses />
      </div>
  );

}

export default App;
