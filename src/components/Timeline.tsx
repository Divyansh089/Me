'use client'

import { Calendar, MapPin, Building } from 'lucide-react'

const experiences = [
  {
    company: 'Unified Mentor Pvt Ltd',
    position: 'Full-Stack Developer Intern',
    duration: 'Feb 2025 – Apr 2025',
    location: 'Remote',
    description: 'Developed and maintained web applications using modern technologies and best practices.',
    achievements: [
      'Built responsive web applications using React and Node.js',
      'Implemented RESTful APIs and database integrations',
      'Collaborated with team members using Git and Agile methodologies',
      'Optimized application performance and user experience'
    ]
  }
]

export default function Timeline() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-lg text-foreground/70">
            My professional journey in software development and blockchain technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-violet via-primary-cyan to-primary-green" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative flex gap-8"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-violet to-primary-cyan flex items-center justify-center">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="card">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-4 mt-2 text-foreground/70">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-foreground/80">
                        {experience.description}
                      </p>

                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-cyan rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Focus */}
        <div className="mt-16 text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Looking Forward</h3>
            <p className="text-foreground/70 mb-4">
              I'm actively seeking opportunities to contribute to innovative blockchain projects and continue growing my expertise in Web3 development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Smart Contracts', 'DeFi Protocols', 'NFT Platforms', 'Cross-chain Solutions'].map((focus) => (
                <span
                  key={focus}
                  className="px-3 py-1 bg-primary-green/10 border border-primary-green/20 rounded-full text-sm font-medium text-primary-green"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
