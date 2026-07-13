import React from 'react'
import { highlightedSkills, skillCategories, strengths, notableProjects } from '../constants'

const SkillIcon = ({ skill }) => (
  <div className='block-container w-20 h-20' title={skill.name}>
    <div className='btn-back rounded-xl' />
    <div className='btn-front rounded-xl flex justify-center items-center'>
      <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
    </div>
  </div>
)

const SkillCategory = ({ category }) => (
  <div className='skill-category-card'>
    <h4 className='text-lg font-poppins font-semibold text-black-500 mb-3'>{category.title}</h4>
    <div className='flex flex-wrap gap-2'>
      {category.skills.map((skill) => (
        <span key={skill} className='skill-pill'>
          {skill}
        </span>
      ))}
    </div>
  </div>
)

export default function SkillsSection() {
  return (
    <div className='py-10 flex flex-col gap-10'>
      <div>
        <h3 className='subhead-text'>Core Technologies</h3>
        <p className='mt-3 text-slate-500 max-w-2xl'>
          A snapshot of the tools and frameworks I use most often across full-stack, mobile, and
          infrastructure work.
        </p>
        <div className='mt-10 flex flex-wrap gap-4'>
          {highlightedSkills.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      <div>
        <h3 className='subhead-text'>Skill Set</h3>
        <p className='mt-3 text-slate-500 max-w-2xl'>
          Intermediate-to-advanced full-stack engineering foundation spanning backend architecture,
          mobile development, DevOps, AI integration, and product thinking.
        </p>
        <div className='mt-10 grid sm:grid-cols-2 gap-5'>
          {skillCategories.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <h3 className='subhead-text'>Current Strengths</h3>
          <ul className='mt-6 space-y-2'>
            {strengths.map((strength) => (
              <li key={strength} className='flex items-start gap-2 text-slate-600'>
                <span className='text-blue-500 mt-1'>▸</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='subhead-text'>Notable Projects</h3>
          <ul className='mt-6 space-y-2'>
            {notableProjects.map((project) => (
              <li key={project} className='flex items-start gap-2 text-slate-600'>
                <span className='text-blue-500 mt-1'>▸</span>
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
