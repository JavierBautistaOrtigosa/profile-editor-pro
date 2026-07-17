import React from 'react'
import CheckboxField from './CheckboxField'

const NotificationsSection = ({ user, updateField, resetField }) => {
  return (
    <div className='section-block'>
      <h3>Notifications</h3>

      <CheckboxField
        label='Email Notifications'
        checked={user.preferences.notifications.email}
        onChange={(v) => updateField('preferences.notifications.email', v)}
        onReset={() => resetField('preferences.notifications.email')}
      />

      <CheckboxField
        label='SMS Notifications'
        checked={user.preferences.notifications.sms}
        onChange={(v) => updateField('preferences.notifications.sms', v)}
        onReset={() => resetField('preferences.notifications.sms')}
      />

      <CheckboxField
        label='Push Notifications'
        checked={user.preferences.notifications.push}
        onChange={(v) => updateField('preferences.notifications.push', v)}
        onReset={() => resetField('preferences.notifications.push')}
      />
    </div>
  )
}

export default NotificationsSection
