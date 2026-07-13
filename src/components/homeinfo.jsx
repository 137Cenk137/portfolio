import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, subtitle, link, btnText, external = false }) => {
  const buttonClass =
    'mt-4 inline-block bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded-md font-medium'

  return (
    <div className="text-xl sm:text-2xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 pointer-events-auto max-w-lg">
      <h1 className="font-semibold">{text}</h1>
      {subtitle && <p className="text-white/90 text-base sm:text-lg mt-3 font-normal">{subtitle}</p>}
      {link && btnText && (
        external ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className={buttonClass}>
            {btnText}
          </a>
        ) : (
          <Link to={link} className={buttonClass}>
            {btnText}
          </Link>
        )
      )}
    </div>
  )
}

const renderContent = {
  1: (
    <div className="text-xl sm:text-2xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 max-w-lg">
      <h1>
        Hi, I am Cenk <span className="font-semibold">Kıran</span>
      </h1>
      <p className="text-white/90 text-base sm:text-lg mt-3 font-normal">
        Electrical & Electronics Engineering student & full-stack software engineer
      </p>
    </div>
  ),
  2: (
    <InfoBox
      text="Full-Stack Developer"
      subtitle="I build and ship web & mobile products — React, Next.js, .NET, Flutter, and event-driven backends."
      link="/about"
      btnText="About Me"
    />
  ),
  3: (
    <InfoBox
      text="Cibik @ Er Eğitim"
      subtitle="Architecting a .NET 9 plant platform with IoT telemetry, RabbitMQ sagas, Semantic Kernel AI, and PostgreSQL."
      link="/about"
      btnText="My Experience"
    />
  ),
  4: (
    <InfoBox
      text="Mobile & AI Products"
      subtitle="Truth or Dare AI, PromptSharper, and cross-platform apps with Firebase, RevenueCat, and OpenAI integration."
      link="/projects"
      btnText="View Projects"
    />
  ),
  5: (
    <InfoBox
      text="DevOps & Systems"
      subtitle="Docker, Coolify, Hetzner VPS, observability with Prometheus, Grafana, Sentry, and PostHog."
      link="/about"
      btnText="Explore Skills"
    />
  ),
  6: (
    <InfoBox
      text="Let's Build Something"
      subtitle="Open to collaborations on SaaS MVPs, backend architecture, mobile apps, and AI-powered products."
      link="/contact"
      btnText="Get in Touch"
    />
  ),
}

export default function HomeInfo({ activeIndex }) {
  return (
    <div className="flex flex-col items-center justify-start pt-20 h-screen">
      {renderContent[activeIndex]}
    </div>
  )
}
