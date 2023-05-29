import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const setExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const [buttonStatus , changeButtonStatus] = useState(false)

    const changeStatus = () => {
        changeButtonStatus(true)
    }
    const resetButtonStatus = () => {
        changeButtonStatus(false)
    }
    return (
        <div className="new-expense">
            {
                buttonStatus === true ? <ExpenseForm onSaveExpenseData={setExpenseDataHandler} onChangeStatus={resetButtonStatus}/> : <button type="button" onClick={changeStatus}>생성</button>
            }
        </div>
    )
}
export default NewExpense;