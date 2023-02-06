import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>Dec. 23, 2022</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$315.85</div>
      </div>
    </div>
  )
}

export default ExpenseItem