import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Exercise2() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((users) =>{
      setUsers(users.data.results)
    })
},[])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map(u => 
        <div key={u.phone}>
          <span>{u.name.first} {u.name.last}</span>
          <img src={u.picture.medium} alt="" />
        </div>)}

      </div>
    </div>
  )
}