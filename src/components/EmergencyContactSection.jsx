import React from 'react'
import TextField from './TextField'

const EmergencyContactSection = ({ user, updateField, resetField }) => {
  return (
    <div className='section-block'>
      <h3>Emergency Contact</h3>

      <TextField
        label='Name'
        value={user.emergencyContact.name}
        placeholder='Type emergency contact name...'
        onChange={(v) => updateField('emergencyContact.name', v)}
        onReset={() => resetField('emergecyContact.name')}
      />

      <TextField
        label='Relation'
        value={user.emergencyContact.relation}
        placeholder='Type relation...'
        onChange={(v) => updateField('emergencyContact.relation', v)}
        onReset={() => resetField('emergecyContact.relationship')}
      />

      <TextField
        label='Phone'
        value={user.emergencyContact.phone}
        placeholder='Type emergency contact phone...'
        onChange={(v) => updateField('emergencyContact.phone', v)}
        onReset={() => resetField('emergecyContact.phone')}
      />
    </div>
  )
}

export default EmergencyContactSection
