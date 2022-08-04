import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


const NewExpense = (props) =>{
    const [isEditing, setIsEditing]  = useState(false);

    const startEditingHandler = () =>{
        setIsEditing(true)
    }
    const cancelEditingHandler = () =>{
        setIsEditing(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
    return(
        <Card className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditingHandler}></ExpenseForm>}
        </Card>
    );
};

export default NewExpense;