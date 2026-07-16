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

  //   updateField()
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

  // -------------------------
  // EMPTY RESET HANDLERS
  // -------------------------

  const resetName = () => {
    setUser((prev) => ({ ...prev, name: initialUser.name }))
  }
  const resetSurname = () => {
    setUser((prev) => ({ ...prev, surname: initialUser.surname }))
  }
  const resetAge = () => {
    setUser((prev) => ({ ...prev, age: initialUser.age }))
  }

  const resetEmail = () => {
    setUser((prev) => ({
      ...prev,
      contact: { ...prev, email: initialUser.contact.email }
    }))
  }
  const resetPhone = () => {
    setUser((prev) => ({
      ...prev,
      contact: {
        ...prev,
        phone: initialUser.contact.phone
      }
    }))
  }

  const resetState = () => {
    setUser((prev) => ({
      ...prev,
      address: { ...prev, state: initialUser.address.state }
    }))
  }
  const resetCity = () => {
    setUser((prev) => ({
      ...prev,
      address: { city: initialUser.address.city }
    }))
  }
  const resetStreet = () => {
    setUser((prev) => ({
      ...prev,
      address: { street: initialUser.address.street }
    }))
  }
  const resetCode = () => {
    setUser((prev) => ({
      ...prev,
      address: { ...prev, code: initialUser.address.code }
    }))
  }

  const resetTheme = () => {
    setUser((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        theme: initialUser.preferences.theme
      }
    }))
  }
  const resetLanguage = () => {
    setUser((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        language: initialUser.preferences.language
      }
    }))
  }

  const resetEmailNotif = () => {
    setUser((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        notifications: {
          ...prev.preferences.notifications,
          email: initialUser.preferences.notifications.email
        }
      }
    }))
  }
  const resetSmsNotif = () => {
    setUser((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        notifications: {
          ...prev.preferences.notifications,
          sms: initialUser.preferences.notifications.sms
        }
      }
    }))
  }
  const resetPushNotif = () => {
    setUser((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        notifications: {
          ...prev.preferences.notifications,
          push: initialUser.preferences.notifications.push
        }
      }
    }))
  }

  const resetSkill1 = () => {
    setUser((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) =>
        i === 0 ? initialUser.skills[0] : skill
      )
    }))
  }

  const resetSkill2 = () => {
    setUser((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) =>
        i === 1 ? initialUser.skills[1] : skill
      )
    }))
  }
  const resetSkill3 = () => {
    setUser((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) =>
        i === 2 ? initialUser.skills[2] : skill
      )
    }))
  }

  const resetEmergencyName = () => {
    setUser((prev) => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        name: initialUser.emergencyContact.name
      }
    }))
  }
  const resetEmergencyRelation = () => {
    setUser((prev) => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        relation: initialUser.emergencyContact.relation
      }
    }))
  }
  const resetEmergencyPhone = () => {
    setUser((prev) => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        phone: initialUser.emergencyContact.phone
      }
    }))
  }

  return (
    <div className='tw-reset'>
      <h2>Profile Editor Pro</h2>

      <BasicInfoSection
        user={user}
        updateField={updateField}
        setUser={setUser}
        resetName={resetName}
        resetSurname={resetSurname}
        resetAge={resetAge}
      />
      <ContactSection
        user={user}
        updateField={updateField}
        setUser={setUser}
        resetEmail={resetEmail}
        resetPhone={resetPhone}
      />
      <AddressSection
        user={user}
        updateField={updateField}
        setUser={setUser}
        resetState={resetState}
        resetCity={resetCity}
        resetStreet={resetStreet}
        resetCode={resetCode}
      />
      <PreferencesSection
        user={user}
        updateField={updateField}
        setUser={setUser}
        resetTheme={resetTheme}
        resetLanguage={resetLanguage}
      />
      <NotificationsSection
        user={user}
        updateField={updateField}
        setUser={setUser}
        resetEmailNotif={resetEmailNotif}
        resetSmsNotif={resetSmsNotif}
        resetPushNotif={resetPushNotif}
      />
      <SkillsSection
        user={user}
        updateField={updateField}
        setUser={setUser}
        resetSkill1={resetSkill1}
        resetSkill2={resetSkill2}
        resetSkill3={resetSkill3}
      />
      <EmergencyContactSection
        user={user}
        updateField={updateField}
        setUser={setUser}
        resetEmergencyName={resetEmergencyName}
        resetEmergencyRelation={resetEmergencyRelation}
        resetEmergencyPhone={resetEmergencyPhone}
      />
    </div>
  )
}

export default ProfileEditorPro
