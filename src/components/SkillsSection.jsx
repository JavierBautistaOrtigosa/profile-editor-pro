import React from 'react'
import SkillInput from './SkillInput'

const SkillsSection = ({
  user,
  setUser,
  resetSkill1,
  resetSkill2,
  resetSkill3
}) => {
  return (
    <div className='section-block'>
      <h3>Skills</h3>

      <SkillInput
        label='Skill 1'
        value={user.skills[0]}
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            skills: prev.skills.map((skill, index) => (index === 0 ? v : skill))
          }))
        }
        onReset={resetSkill1}
      />

      <SkillInput
        label='Skill 2'
        value={user.skills[1]}
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            skills: prev.skills.map((skill, index) => (index === 1 ? v : skill))
          }))
        }
        onReset={resetSkill2}
      />

      <SkillInput
        label='Skill 3'
        value={user.skills[2]}
        onChange={(v) =>
          setUser((prev) => ({
            ...prev,
            skills: prev.skills.map((skill, index) => (index === 2 ? v : skill))
          }))
        }
        onReset={resetSkill3}
      />
    </div>
  )
}

export default SkillsSection
