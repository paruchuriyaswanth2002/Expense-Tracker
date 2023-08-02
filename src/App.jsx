import { useState } from 'react';
import './App.css'
import ExpenseList from './component/expenses/expense_list/ExpenseList';
import NewExpense from './component/new_expense/NewExpense';

const DUMMY_DATA=[
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const[expenses,setExpenses]=useState(DUMMY_DATA)

  //const DUMMY_DATA = [
    // {
    //   id: 'e1',
    //   title: 'Groceries',
    //   amount: 94.12,
    //   date: new Date(2021, 7, 14),
    // },
    // { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
    // {
    //   id: 'e3',
    //   title: 'Car Repair',
    //   amount: 294.67,
    //   date: new Date(2021, 2, 28),
    // },
    // {
    //   id: 'e4',
    //   title: 'New work desk',
    //   amount: 450,
    //   date: new Date(2021, 5, 12),
    // },
  //];
  const onNewExpenseSubmit=(new_expense)=>{
    console.log(new_expense);
    setExpenses((previous_expenses)=>[new_expense,...previous_expenses]);
   // DUMMY_DATA.push(new_expense);

  }

  return (
    <div className="App">
      <NewExpense onNewExpenseSave={onNewExpenseSubmit}/>
    <ExpenseList expenses={expenses} />
        
        
    </div>
  )
}

export default App
