import { useState } from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Card from '../Card/Card'
import './Expenses.css'
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No expenses found.</p>

  if(filteredExpenses.length > 0) {
    expensesContent = 
      filteredExpenses.map(expense => (
        <ExpenseItem
          key = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
        />
      ))  
  }
  
  return (
    <Card className='expenses'>
      <ExpensesFilter 
        onFilterChange = {filterChangeHandler}
        selected={filteredYear}
      />
      {expensesContent}
    </Card>
  )
}

export default Expenses