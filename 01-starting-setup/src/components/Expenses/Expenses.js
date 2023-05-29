import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../NewExpense/ExpensesFilter'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilteredYeae] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYeae(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })

  let expensesContent = <p>No expenses found.</p>

  if(filteredExpenses.length > 0 ){
    expensesContent = filteredExpenses.map((expense) => 
    <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
    />
    )
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;