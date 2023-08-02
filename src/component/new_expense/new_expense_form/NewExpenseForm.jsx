import React from "react";
import { useState } from "react";
import './NewExpenseForm.css';


const NewExpenseForm=(props)=>{
    const  {save}=props;

    //const [title,setTitle]=useState(null);
    let [title,setTitle]=useState('');
    let [amount,setAmount]=useState('');
    let [date,setDate]=useState('');


    const onTitleChangeHandler=(event)=>setTitle(event.target.value);
    const onAmountChangeHandler=(event)=>setAmount(event.target.value);
    const onDateChangeHandler=(event)=>setDate(event.target.value);


    const onFormSubmitHandler=(event)=>{
                event.preventDefault();
                const new_expense={
                    title,amount,date:new Date(date)
                }
               // console.log(new_expense)
               save(new_expense)
               setTitle('');
               setAmount('');
               setDate('');

            };

    return (
         
    <form onSubmit={onFormSubmitHandler}> 
    {/* input field */}
    <div className="new-expense__controls">
        {/* title field*/}
       <div className="new-expense__control">

<label htmlFor="expense_title">Title</label>
<input type="text" id="expense_title" name="title" value={title} onChange={onTitleChangeHandler}/>
</div>

<div className="new-expense__control">
<label htmlFor="amount">Amount</label>
<input type="number" id="expense_amount" min="0" max="250000" name="amount" value={amount} onChange={onAmountChangeHandler}/>
</div>

<div className="new-expense__control">
   <label htmlFor="expense_date">Date</label>
   <input type="date" id="expense_date" name="date" value={date} onChange={onDateChangeHandler}/>
</div>
</div>



<div className="ew-expense__actions">
<button>Cancel</button>

<button>Add Expense</button>

</div>
</form>

);
};
export default NewExpenseForm;