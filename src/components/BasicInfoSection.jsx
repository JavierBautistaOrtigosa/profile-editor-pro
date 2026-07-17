import React from 'react'
import TextField from './TextField'

const BasicInfoSection = ({ user, updateField, resetField }) => {
  return (
    <div className='section-block'>
      <h3>Basic Information</h3>

      <TextField
        label='Name'
        value={user.name}
        placeholder='Type your name...'
        onChange={(v) => updateField('name', v)}
        onReset={() => resetField('name')}
      />

      <TextField
        label='Surname'
        value={user.surname}
        placeholder='Type your surname...'
        onChange={(v) => updateField('surname', v)}
        onReset={() => resetField('surname')}
      />

      <TextField
        label='Age'
        value={user.age}
        placeholder='Type your age...'
        onChange={(v) => updateField('age', v)}
        onReset={() => resetField('age')}
      />
    </div>
  )
}

export default BasicInfoSection
