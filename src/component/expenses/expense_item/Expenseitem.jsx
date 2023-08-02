import React, { useState } from "react"
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";

const ExpenseItem =(props)=>{
    console.log(props);
    const{
        date=new Date(),
        title='',
        amount=0
    }=props;
    const [modified_title,setModifiedTitle]=useState(title)
    const onClickHandler=()=>{
        setModifiedTitle('updated');
        console.log(modified_title,props);
    }
    return (
        <div className="expense-item">
            <ExpenseDate date={date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
        </div>
       {/* <button onClick={onClickHandler}>update</button> */}
        </div>

    )
};

export default ExpenseItem;