import React from 'react'

const SkillInput = ({ label, value, onChange, onReset }) => {
  return (
    <label>
      {label}: {value}
      <br />
      <input value={value} onChange={(e) => onChange(e.target.value)} />
      <button onClick={onReset}>Reset</button>
      <br />
      <br />
    </label>
  )
}

export default SkillInput
