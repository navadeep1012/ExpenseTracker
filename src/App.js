//import ExpenseItem from "./components/ExpenseItems";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";

const App =() => {
  
  
  return (
    <div>
      <div>
        <h1>Expense Items</h1>
      </div>
      <Card>
        <Expenses />
      </Card>
    </div>
  );

}

export default App;
