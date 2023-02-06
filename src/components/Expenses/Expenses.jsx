import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Card from '../Card/Card'
import './Expenses.css'

const Expenses = ({expenses}) => {
  return (
    <Card className='expenses'>
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