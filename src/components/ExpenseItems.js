import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <div>
      <h2> Expense items</h2>
      <div className="expense-item">
        <div>{props.items.date.toDateString()}</div>
        <div className="expense-item__description">
          <h2>{props.items.title}</h2>
          <h2>{props.items.location}</h2>
          <div className="expense-item__price">{props.items.amount}</div>
          
        </div>
      </div>
      
    </div>
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
