import ExpenseItem from "./components/ExpenseItems";
function App() {
  const expenses = [
    {
      title: "Toilet Paper",
      amount: 56.73,
      date: new Date(2023, 6, 22),
      location: "Hyderabad",
    },
    {
      title: "New Tv",
      amount: 5600,
      date: new Date(2023, 5, 12),
      location: "Warangal",
    },
    {
      title: "Car Insurance",
      amount: 524.63,
      date: new Date(2021, 3, 21),
      location: "Bangalore",
    },
    {
      title: "Wooden Desk ",
      amount: 452.36,
      date: new Date(2022, 4, 16),
      location: "Hyderabad",
    },
  ];

  
  
  return (
    <div>
      {expenses.map((obj) => {
        return <ExpenseItem items = {obj} />;
      })}
    </div>
  );

  // return (
  //   <div>
  //     <ExpenseItem

  //       title={expenses[0].title}
  //       amount={expenses[0].amount}
  //       date={expenses[0].date}
  //       location={expenses[0].location}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expenses[1].title}
  //       amount={expenses[1].amount}
  //       date={expenses[1].date}
  //       location={expenses[1].location}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expenses[2].title}
  //       amount={expenses[2].amount}
  //       date={expenses[2].date}
  //       location={expenses[2].location}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expenses[3].title}
  //       amount={expenses[3].amount}
  //       date={expenses[3].date}
  //       location={expenses[3].location}
  //     ></ExpenseItem>
  //   </div>
  // );
}

export default App;
