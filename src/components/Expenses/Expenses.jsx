import { useState } from 'react'
import Card from '../Card/Card'
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'
import ExpensesList from './ExpensesList'
import './Expenses.css'

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  
  return (
    <Card className='expenses'>
      <ExpensesFilter 
        onFilterChange = {filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  )
}

export default Expenses