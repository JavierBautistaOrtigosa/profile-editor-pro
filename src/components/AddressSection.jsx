import React from 'react'
import TextField from './TextField'

const AddressSection = ({
  user,
  updateField,
  resetStreet,
  resetCity,
  resetState,
  resetCode
}) => {
  return (
    <div className='section-block'>
      <h3>Address</h3>

      <TextField
        label='Street'
        value={user.address.street}
        placeholder='Type your street...'
        onChange={(v) => updateField('address.street', v)}
        onReset={resetStreet}
      />

      <TextField
        label='City'
        value={user.address.city}
        placeholder='Type your city...'
        onChange={(v) => updateField('address.city', v)}
        onReset={resetCity}
      />

      <TextField
        label='State'
        value={user.address.state}
        placeholder='Type your state...'
        onChange={(v) => updateField('address.state', v)}
        onReset={resetState}
      />

      <TextField
        label='Postal Code'
        value={user.address.code}
        placeholder='Type your postal code...'
        onChange={(v) => updateField('address.code', v)}
        onReset={resetCode}
      />
    </div>
  )
}

export default AddressSection
