import React from 'react'
import TextField from './TextField'

const AddressSection = ({
  user,
  setUser,
  resetState,
  resetCity,
  resetStreet,
  resetCode
}) => {
  return (
    <div className='section-block'>
      <h3>Address Information</h3>

      <TextField
        label='State'
        value={user.address.state}
        placeholder='Type your state...'
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            address: {
              ...prev.address,
              state: v
            }
          }))
        }
        onReset={resetState}
      />

      <TextField
        label='City'
        value={user.address.city}
        placeholder='Type your city...'
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            address: {
              ...prev.address,
              city: v
            }
          }))
        }
        onReset={resetCity}
      />

      <TextField
        label='Street'
        value={user.address.street}
        placeholder='Type your street...'
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            address: {
              ...prev.address,
              street: v
            }
          }))
        }
        onReset={resetStreet}
      />

      <TextField
        label='Code'
        value={user.address.code}
        placeholder='Type your code...'
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            address: {
              ...prev.address,
              code: v
            }
          }))
        }
        onReset={resetCode}
      />
    </div>
  )
}

export default AddressSection
