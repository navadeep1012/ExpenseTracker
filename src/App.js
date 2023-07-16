//import ExpenseItem from "./components/ExpenseItems";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import  "./components/Expenses/ExpenseItem.css";
import ExpenseForm from "./components/NewExpense/ExpenseForm";


const App =() => {
  
  
  return (
    <Card>
      <div>
        <ExpenseForm/>
        <Expenses />
      </div>
    </Card>
  );

}

export default App;
