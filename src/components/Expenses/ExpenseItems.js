import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) =>{
  // const [title, setTitle] = useState(props.items.title);
  // const [amount, setExpense]= useState(props.items.amount)

  //  const clickHandler = () => {
  //   setTitle('updated');
  //   console.log(title);
  // };
  // const changeExpense = () =>{
  //   setExpense('100$');
  //   console.log(amount);
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
      {/* <button onClick = {clickHandler} >Edit Button</button>
      <button onClick = {changeExpense} >Change Expense</button> */}
      
    </Card>
  );
}

export default ExpenseItem;

// import './ExpenseItem.css'
// function ExpenseItem(){
//     return (
//       <div>
//         <div>
//           <h3>Expense Items</h3>
//         </div>
//         <div>Food Rs 10</div>
//         <div>Petrol Rs 100</div>
//         <div>Movies Rs 200</div>
//       </div>
//     );
// }

// export default ExpenseItem;


  /* <div className="expense-item__description">
          <h2>{props.items.title}</h2>
          <h2>{props.items.location}</h2>
          <div className="expense-item__price">{props.items.amount}</div>
        </div> */

