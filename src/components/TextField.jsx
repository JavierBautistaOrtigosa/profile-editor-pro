import React from 'react'

const TextField = ({ label, value, placeholder, onChange, onReset }) => {
  return (
    <label>
      {label}: {value}
      <br />
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onReset}>Reset</button>
      <br />
      <br />
    </label>
  )
}

export default TextField
