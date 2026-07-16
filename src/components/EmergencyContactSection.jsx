import React from 'react'
import TextField from './TextField'

const EmergencyContactSection = ({
  user,
  setUser,
  resetEmergencyName,
  resetEmergencyRelation,
  resetEmergencyPhone
}) => {
  return (
    <div className='section-block'>
      <h3>Emergency Contact</h3>

      <TextField
        label='Emergency Name'
        value={user.emergencyContact.name}
        placeholder='Type emergency contact name...'
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            emergencyContact: {
              ...prev.emergencyContact,
              name: v
            }
          }))
        }
        onReset={resetEmergencyName}
      />

      <TextField
        label='Relation'
        value={user.emergencyContact.relation}
        placeholder='Type relation...'
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            emergencyContact: {
              ...prev.emergencyContact,
              relation: v
            }
          }))
        }
        onReset={resetEmergencyRelation}
      />

      <TextField
        label='Emergency Phone'
        value={user.emergencyContact.phone}
        placeholder='LAST'
        //   placeholder='Type emergency phone...'
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            emergencyContact: {
              ...prev.emergencyContact,
              phone: v
            }
          }))
        }
        onReset={resetEmergencyPhone}
      />
    </div>
  )
}

export default EmergencyContactSection
