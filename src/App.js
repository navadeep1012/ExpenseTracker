//import ExpenseItem from "./components/ExpenseItems";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import  "./components/Expenses/ExpenseItem.css";


const App =() => {
  
  
  return (
    <Card className="expense-ui">
      <div>
        <div>
          <h1>Expense Items</h1>
        </div>
        <Expenses />
      </div>
    </Card>
  );

}

export default App;
