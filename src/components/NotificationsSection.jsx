import React from 'react'
import CheckboxField from './CheckboxField'

const NotificationsSection = ({
  user,
  setUser,
  resetEmailNotif,
  resetSmsNotif,
  resetPushNotif
}) => {
  return (
    <div className='section-block'>
      <h3>Notification Settings</h3>

      <CheckboxField
        label='Email Notifications'
        checked={user.preferences.notifications.email}
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            preferences: {
              ...prev.preferences,
              notifications: {
                ...prev.preferences.notifications,
                email: v
              }
            }
          }))
        }
        onReset={resetEmailNotif}
      />

      <CheckboxField
        label='SMS Notifications'
        checked={user.preferences.notifications.sms}
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            preferences: {
              ...prev.preferences,
              notifications: {
                ...prev.preferences.notifications,
                sms: v
              }
            }
          }))
        }
        onReset={resetSmsNotif}
      />

      <CheckboxField
        label='Push Notifications'
        checked={user.preferences.notifications.push}
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            preferences: {
              ...prev.preferences,
              notifications: {
                ...prev.preferences.notifications,
                push: v
              }
            }
          }))
        }
        onReset={resetPushNotif}
      />
    </div>
  )
}

export default NotificationsSection
