import React from 'react'
import TextField from './TextField'

const PreferencesSection = ({ user, setUser, resetTheme, resetLanguage }) => {
  return (
    <div className='section-block'>
      <h3>Preferences</h3>

      <TextField
        label='Theme'
        value={user.preferences.theme}
        placeholder='light / dark'
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            preferences: {
              ...prev.preferences,
              theme: v
            }
          }))
        }
        onReset={resetTheme}
      />

      <TextField
        label='Language'
        value={user.preferences.language}
        placeholder='Type your language...'
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            preferences: {
              ...prev.preferences,
              language: v
            }
          }))
        }
        onReset={resetLanguage}
      />
    </div>
  )
}

export default PreferencesSection
