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
  
  return (
    <Card className='expenses'>
      <ExpensesFilter 
        onFilterChange = {filterChangeHandler}
        selected={filteredYear}
      />
      {expenses.map(expense => (
        <div key = {expense.id} >
          <ExpenseItem
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
          />
        </div>
      ))}
    </Card>
  )
}

export default Expenses