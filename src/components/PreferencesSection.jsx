import React from 'react'
import TextField from './TextField'

const PreferencesSection = ({ user, updateField, resetField }) => {
  return (
    <div className='section-block'>
      <h3>Preferences</h3>

      <TextField
        label='Theme'
        value={user.preferences.theme}
        placeholder='Type your preferred theme...'
        onChange={(v) => updateField('preferences.theme', v)}
        onReset={() => resetField('preferences.theme')}
      />

      <TextField
        label='Language'
        value={user.preferences.language}
        placeholder='Type your preferred language...'
        onChange={(v) => updateField('preferences.language', v)}
        onReset={() => resetField('preferences.language')}
      />
    </div>
  )
}

export default PreferencesSection
