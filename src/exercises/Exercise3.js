import React from 'react'
import { useState, useEffect} from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  const [month, setMonth] = useState(-1)
  const [expences, setExpences] = useState([])

  useEffect(() => {
    fetchExpenses(month).then((expences) =>{
      setExpences(expences)
    })
  },[month])

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select name="month" id="month-select" value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">month</option>
          {months.map((m, index) => <option key={m} value={index}>{m}</option>)}
        </select>
        <div>{console.log(expences)}</div>
      </div>
    </div>
  )
}