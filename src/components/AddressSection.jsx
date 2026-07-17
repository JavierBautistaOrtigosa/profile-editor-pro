import React from 'react'
import TextField from './TextField'

const AddressSection = ({ user, updateField, resetField }) => {
  return (
    <div className='section-block'>
      <h3>Address</h3>

      <TextField
        label='Street'
        value={user.address.street}
        placeholder='Type your street...'
        onChange={(v) => updateField('address.street', v)}
        onReset={() => resetField('address.street')}
      />

      <TextField
        label='City'
        value={user.address.city}
        placeholder='Type your city...'
        onChange={(v) => updateField('address.city', v)}
        onReset={() => resetField('address.city')}
      />

      <TextField
        label='State'
        value={user.address.state}
        placeholder='Type your state...'
        onChange={(v) => updateField('address.state', v)}
        onReset={() => resetField('address.state')}
      />

      <TextField
        label='Postal Code'
        value={user.address.code}
        placeholder='Type your postal code...'
        onChange={(v) => updateField('address.code', v)}
        onReset={() => resetField('address.zip')}
      />
    </div>
  )
}

export default AddressSection
