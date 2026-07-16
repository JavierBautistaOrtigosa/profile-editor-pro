import { useState } from 'react'
import './tw-reset.css'

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

  // ---------------------------------------
  // 1) Replace an item by index:
  //   const arr = ["a", "b", "c"];
  //   const updated = arr.map((item, index) => (index === 1 ? "B" : item));
  //   console.log(updated); // ['a', 'B', 'c']
  // ---------------------------------------
  // ---------------------------------------
  // 2) Update item using a condition:
  //   const arr = ['a', 'b', 'c']
  //   const updated = arr.map((item) => (item === 'b' ? 'B' : item))
  //   console.log(updated)

  //   Which is the same as this implicit version:
  //   const arr = ['a', 'b', 'c']
  //   const updated = arr.map((item) => {
  //     return item === 'b' ? 'B' : item
  //   })
  //   console.log(updated)
  // ---------------------------------------
  // ---------------------------------------
  // 3) Update object inside array:
  //   const users = [
  //     { name: 'Javier' },
  //     { name: 'Miriam' },
  //     { name: 'Liam' },
  //     { name: 'Maia' }
  //   ]

  //   const updated = users.map((u, i) => (i === 1 ? { ...u, name: 'Javi' } : u))
  //   console.log(updated)
  // ---------------------------------------
  // ---------------------------------------
  // 4) Update object by id:
  //   const users = [
  //     { id: 1, name: 'Javi' },
  //     { id: 2, name: 'Miriam' },
  //     { id: 3, name: 'Liam' },
  //     { id: 4, name: 'Maia' },
  //     { id: 5, name: 'Ramon' },
  //     { id: 6, name: 'Tere' }
  //   ]

  //   const updated = users.map((u) => (u.id === 2 ? { ...u, name: 'Javi' } : u))

  //   console.log(updated)
  // ---------------------------------------
  // ---------------------------------------
  // 5) Update nested array item;
  //   const developer = {
  //     name: 'Javier',
  //     skills: ['JS', 'React']
  //   }

  //   const updated = {
  //     ...developer,
  //     skills: developer.skills.map((skill, i) => (i === 0 ? 'JavaScript' : skill))
  //   }

  //   console.log(updated)
  // ---------------------------------------
  // ---------------------------------------
  // 6) Insert item at index (immutable)
  //   const arr = ['a', 'b', 'c']
  //   const updated1 = [...arr.slice(0, 1)] // Extracts elements from index 0 up to, but not including, index 1
  //   const updated2 = [...arr.slice(0, 1), 'X'] // Same as above and add 'X' after index 0
  //   const updated3 = [...arr.slice(0, 1), 'X', ...arr.slice(1)] // // Extracts elements from index 1 onwards

  //   Super useful for React state:
  // [ slice(0, i) | newValue | slice(i + 1) ]
  //   updated3 is exactly that pattern

  //   console.log(updated1)
  //   console.log(updated2)
  //   console.log(updated3)
  // ---------------------------------------
  // ---------------------------------------
  // 7) Remove item at index (immutable)
  //   const arr = ['a', 'b', 'c']
  //   const updated = arr.filter((_, i) => i !== 1)
  //   console.log(updated)
  // ---------------------------------------
  // ---------------------------------------
  // 8) Toggle a boolean inside array of objects
  //   const items = [
  //     { id: 1, active: false },
  //     { id: 2, active: true }
  //   ]
  //   const updated = items.map((i) =>
  //     i.id === 1 ? { ...i, active: !i.active } : i
  //   )
  //   console.log(updated)
  // ---------------------------------------
  // ---------------------------------------
  // 9) Update multiple fields inside object in array
  //   const products = [
  //     { id: 1, price: 10, stock: 5 },
  //     { id: 2, price: 20, stock: 3 }
  //   ]

  //   const updated = products.map((p) =>
  //     p.id === 2 ? { ...p, price: 18, stock: p.stock + 1 } : p
  //   )

  //   console.log(updated)
  // ---------------------------------------
  // ---------------------------------------
  // 10) React-style nested update (your exact level)
  //   setUser((prev) => ({
  //     ...prev,
  //     skills: prev.skills.map((skill, index) =>
  //       index === 0 ? e.target.value : skill
  //     )
  //   }))
  // ---------------------------------------
  return (
    <div className='tw-reset'>
      <h2>Profile Editor Pro</h2>

      {/* BASIC INFO - Done */}
      <label>
        Name: {user.name}
        <br />
        <input
          value={user.name}
          placeholder='Type your name...'
          onChange={(e) => {
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }}
        />
        <button onClick={resetName}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Surname: {user.surname}
        <br />
        <input
          value={user.surname}
          placeholder='Type your surname...'
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              surname: e.target.value
            }))
          }}
        />
        <button onClick={resetSurname}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Age: {user.age}
        <br />
        <input
          value={user.age}
          placeholder='Type your age...'
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              age: e.target.value
            }))
          }
        />
        <button onClick={resetAge}>Reset</button>
      </label>

      <br />
      <br />

      {/* CONTACT - Done */}
      <label>
        Email: {user.contact.email}
        <br />
        <input
          value={user.contact.email}
          placeholder='Type your email...'
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              contact: { ...prev, email: e.target.value }
            }))
          }}
        />
        <button onClick={resetEmail}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Phone: {user.contact.phone}
        <br />
        <input
          value={user.contact.phone}
          placeholder='Type your phone...'
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              contact: { ...prev, phone: e.target.value }
            }))
          }}
        />
        <button onClick={resetPhone}>Reset</button>
      </label>

      <br />
      <br />

      {/* ADDRESS - Done */}
      <label>
        State: {user.address.state}
        <br />
        <input
          value={user.address.state}
          placeholder='Type your state...'
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              address: { ...prev, state: e.target.value }
            }))
          }}
        />
        <button onClick={resetState}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        City: {user.address.city}
        <br />
        <input
          value={user.address.city}
          placeholder='Type your city...'
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              address: { ...prev, city: e.target.value }
            }))
          }}
        />
        <button onClick={resetCity}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Street: {user.address.street}
        <br />
        <input
          value={user.address.street}
          placeholder='Type your street...'
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              address: { ...prev, street: e.target.value }
            }))
          }}
        />
        <button onClick={resetStreet}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Code: {user.address.code}
        <br />
        <input
          value={user.address.code}
          placeholder='Type your code...'
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              address: { ...prev, code: e.target.value }
            }))
          }}
        />
        <button onClick={resetCode}>Reset</button>
      </label>

      <br />
      <br />

      {/* PREFERENCES - Done */}
      <label>
        Theme: {user.preferences.theme}
        <br />
        <input
          value={user.preferences.theme}
          placeholder='light/dark'
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              preferences: { ...prev.preferences, theme: e.target.value }
            }))
          }}
        />
        <button onClick={resetTheme}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Language: {user.preferences.language}
        <br />
        <input
          value={user.preferences.language}
          placeholder='Type your language...'
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              preferences: { ...prev.preferences, language: e.target.value }
            }))
          }}
        />
        <button onClick={resetLanguage}>Reset</button>
      </label>

      <br />
      <br />

      {/* NOTIFICATIONS - Done */}
      <label>
        Email Notifications: {String(user.preferences.notifications.email)}
        <br />
        <input
          type='checkbox'
          checked={user.preferences.notifications.email}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              preferences: {
                ...prev.preferences,
                notifications: {
                  ...prev.notifications,
                  email: e.target.checked
                }
              }
            }))
          }}
        />
        <button onClick={resetEmailNotif}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        SMS Notifications: {String(user.preferences.notifications.sms)}
        <br />
        <input
          type='checkbox'
          checked={user.preferences.notifications.sms}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              preferences: {
                ...prev.preferences,
                notifications: {
                  ...prev.preferences.notifications,
                  sms: e.target.checked
                }
              }
            }))
          }}
        />
        <button onClick={resetSmsNotif}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Push Notifications: {String(user.preferences.notifications.push)}
        <br />
        <input
          type='checkbox'
          checked={user.preferences.notifications.push}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              preferences: {
                ...prev.preferences,
                notifications: {
                  ...prev.preferences.notifications,
                  push: e.target.checked
                }
              }
            }))
          }}
        />
        <button onClick={resetPushNotif}>Reset</button>
      </label>

      <br />
      <br />

      {/* SKILLS - Done */}
      <label>
        Skill 1: {user.skills[0]}
        <br />
        <input
          value={user.skills[0]}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              skills: prev.skills.map((skill, index) =>
                index === 0 ? e.target.value : skill
              )
            }))
          }}
        />
        <button onClick={resetSkill1}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Skill 2: {user.skills[1]}
        <br />
        <input
          value={user.skills[1]}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              skills: prev.skills.map((skill, index) =>
                index === 1 ? e.target.value : skill
              )
            }))
          }}
        />
        <button onClick={resetSkill2}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Skill 3: {user.skills[2]}
        <br />
        <input
          value={user.skills[2]}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              skills: prev.skills.map((skill, index) =>
                index === 2 ? e.target.value : skill
              )
            }))
          }}
        />
        <button onClick={resetSkill3}>Reset</button>
      </label>

      <br />
      <br />

      {/* EMERGENCY CONTACT */}
      <label>
        Emergency Name: {user.emergencyContact.name}
        <br />
        <input
          value={user.emergencyContact.name}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              emergencyContact: {
                ...prev.emergencyContact,
                name: e.target.value
              }
            }))
          }}
        />
        <button onClick={resetEmergencyName}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Emergency Relation: {user.emergencyContact.relation}
        <br />
        <input
          value={user.emergencyContact.relation}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              emergencyContact: {
                ...prev.emergencyContact,
                relation: e.target.value
              }
            }))
          }}
        />
        <button onClick={resetEmergencyRelation}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Emergency Phone: {user.emergencyContact.phone}
        <br />
        <input
          value={user.emergencyContact.phone}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              emergencyContact: {
                ...prev.emergencyContact,
                phone: e.target.value
              }
            }))
          }}
        />
        <button onClick={resetEmergencyPhone}>Reset</button>
      </label>

      <br />
      <br />
    </div>
  )
}

export default ProfileEditorPro
