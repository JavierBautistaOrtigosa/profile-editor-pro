import React from 'react'
import TextField from './TextField'

const ContactSection = ({ user, updateField, resetEmail, resetPhone }) => {
  return (
    <div className='section-block'>
      <h3>Contact Information</h3>

      <TextField
        label='Email'
        value={user.contact.email}
        placeholder='Type your email...'
        onChange={(v) => updateField('contact.email', v)}
        onReset={resetEmail}
      />

      <TextField
        label='Phone'
        value={user.contact.phone}
        placeholder='Type your phone...'
        onChange={(v) => updateField('contact.phone', v)}
        onReset={resetPhone}
      />
    </div>
  )
}

export default ContactSection
