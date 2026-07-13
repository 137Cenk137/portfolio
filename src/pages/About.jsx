import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { aboutBio, experiences } from '../constants'
import CTA from '../components/CTA'
import SkillsSection from '../components/SkillsSection'

export default function About() {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>Cenk Kıran</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p className='max-w-2xl text-gray-600 font-medium'>{aboutBio.headline}</p>
        <p className='max-w-2xl text-gray-600'>{aboutBio.summary}</p>
      </div>

      <SkillsSection />

      <div className='py-16'>
        <h3 className='subhead-text'>My Experiences</h3>
        <div className='mt-16'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.title}
                      className='w-full h-full object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: '7px solid #232631',
                  boxShadow: 'none',
                  background: experience.iconBg,
                  color: '#fff',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500 font-medium font-base'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='my-8 border-slate-500' />
      <CTA />
    </section>
  )
}
