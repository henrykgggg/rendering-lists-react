import React,{useState} from 'react';
import "./ExpenceItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card";

function ExpenseItem(props) {
const [tittle,setTittle] = useState(props.tittle);

  const clickhandler = () =>{
    setTittle('updated') ;
    console.log ("clicked");
  }
  return (
    <Card className="expense-item">
<ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{tittle}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    <button className='btn-clicked' onClick={clickhandler}>change tittle</button>
    </Card>
  );
}

export default ExpenseItem;
