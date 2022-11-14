import React, {useState} from 'react'

export default function Exercise1() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input type="text" name="name" placeholder='User name' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text"name="city" placeholder='User city' value={city} onChange={(e) => setCity(e.target.value)}/>
        <select name="country" id="pet-select" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">User country</option>
          {countries.map(c => <option key = {c} value={c}>{c}</option>)}
        </select>

      </div>
    </div>
  )
}