import React from 'react'

const CheckboxField = ({ label, checked, onChange, onReset }) => {
  return (
    <label>
      {label}: {String(checked)}
      <br />
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <button onClick={onReset}>Reset</button>
      <br />
      <br />
    </label>
  )
}

export default CheckboxField
