import React from 'react'
import SkillInput from './SkillInput'

const SkillsSection = ({ user, updateField, resetField }) => {
  return (
    <div className='section-block'>
      <h3>Skills</h3>

      <SkillInput
        label='Skill 1'
        value={user.skills[0]}
        placeholder='Type a skill...'
        onChange={(v) => updateField('skills.0', v)}
        onReset={() => resetField('skills.0')}
      />

      <SkillInput
        label='Skill 2'
        value={user.skills[1]}
        placeholder='Type a skill...'
        onChange={(v) => updateField('skills.1', v)}
        onReset={() => resetField('skills.1')}
      />

      <SkillInput
        label='Skill 3'
        value={user.skills[2]}
        placeholder='Type a skill...'
        onChange={(v) => updateField('skills.2', v)}
        onReset={() => resetField('skills.2')}
      />
    </div>
  )
}

export default SkillsSection
