import { useState } from 'react'
import './tw-reset.css'
import BasicInfoSection from './components/BasicInfoSection'
import ContactSection from './components/ContactSection'
import AddressSection from './components/AddressSection'
import PreferencesSection from './components/PreferencesSection'
import NotificationsSection from './components/NotificationsSection'
import SkillsSection from './components/SkillsSection'
import EmergencyContactSection from './components/EmergencyContactSection'

const ProfileEditorPro = () => {
  const initialUser = {
    name: '',
    surname: '',
    age: '',
    contact: {
      email: '',
      phone: ''
    },
    address: {
      state: '',
      city: '',
      street: '',
      code: ''
    },
    preferences: {
      theme: '',
      language: '',
      notifications: {
        email: false,
        sms: false,
        push: false
      }
    },
    //     Working here...
    skills: ['', '', ''], // 3 skills
    emergencyContact: {
      name: '',
      relation: '',
      phone: ''
    }
  }

  const [user, setUser] = useState(initialUser)

  //   updateField
  const updateField = (path, value) => {
    setUser((prev) => {
      const newUser = structuredClone(prev) // safe deep clone

      const keys = path.split('.') // ["address", "city"]
      let current = newUser

      // walk the object until the second‑last key
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]]
      }

      // update the final key
      current[keys[keys.length - 1]] = value

      return newUser
    })
  }

  //   resetField
  const resetField = (path) => {
    setUser((prev) => {
      const newUser = structuredClone(prev)
      const original = structuredClone(initialUser)

      const keys = path.split('.')
      let current = newUser
      let originalCurrent = original

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]]
        originalCurrent = originalCurrent[keys[i]]
      }

      current[keys[keys.length - 1]] = originalCurrent[keys[keys.length - 1]]

      return newUser
    })
  }

  // resetAll
  const resetAll = () => {
    setUser(structuredClone(initialUser))
  }

  return (
    <div className='tw-reset'>
      <h2>Profile Editor Pro</h2>

      <BasicInfoSection
        user={user}
        updateField={updateField}
        resetField={resetField}
      />

      <ContactSection
        user={user}
        updateField={updateField}
        resetField={resetField}
      />

      <AddressSection
        user={user}
        updateField={updateField}
        resetField={resetField}
      />

      <PreferencesSection
        user={user}
        updateField={updateField}
        resetField={resetField}
      />

      <NotificationsSection
        user={user}
        updateField={updateField}
        resetField={resetField}
      />

      <SkillsSection
        user={user}
        updateField={updateField}
        resetField={resetField}
      />

      <EmergencyContactSection
        user={user}
        updateField={updateField}
        resetField={resetField}
      />

      {/* Reset All Button */}
      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={resetAll}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#e11d48',
            color: 'white',
            borderRadius: '6px'
          }}
        >
          Reset All
        </button>
      </div>
    </div>
  )
}

export default ProfileEditorPro
