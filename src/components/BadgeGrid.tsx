'use client'

import { Award, Trophy, Star, Target } from 'lucide-react'

const certifications = [
  {
    name: 'Hyperledger Fabric Developer',
    issuer: 'Kerala Blockchain Academy',
    year: '2025',
    icon: Award,
    color: 'from-primary-violet to-primary-cyan'
  },
  {
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    year: '2024',
    icon: Star,
    color: 'from-primary-green to-primary-cyan'
  },
  {
    name: 'Java (Basic)',
    issuer: 'HackerRank',
    year: '2025',
    icon: Target,
    color: 'from-primary-cyan to-primary-violet'
  },
  {
    name: 'Full-Stack Web Development',
    issuer: 'Udemy',
    year: '2025',
    icon: Trophy,
    color: 'from-primary-violet to-primary-green'
  },
  {
    name: 'Advanced Blockchain',
    issuer: 'Udemy',
    year: '2024',
    icon: Award,
    color: 'from-primary-green to-primary-violet'
  }
]

const achievements = [
  {
    title: 'LeetCode',
    value: '200+ problems solved',
    subtitle: 'Rating: 1756 • Max streak: 87',
    link: 'https://leetcode.com/divyansh_patel',
    icon: Target,
    color: 'from-primary-violet to-primary-cyan'
  },
  {
    title: 'Codeforces',
    value: '50+ solved',
    subtitle: 'Max rating: 1612 • Max streak: 25',
    link: 'https://codeforces.com/profile/divyansh_patel',
    icon: Star,
    color: 'from-primary-green to-primary-cyan'
  },
  {
    title: 'Hackathon',
    value: 'LNM Hacks 7.0',
    subtitle: 'Web3 track participant',
    icon: Trophy,
    color: 'from-primary-cyan to-primary-violet'
  }
]

export default function BadgeGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Certifications */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Professional certifications and competitive programming achievements that demonstrate my commitment to continuous learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.name}
                className="card group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary-cyan transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <span className="inline-block px-3 py-1 bg-primary-violet/10 border border-primary-violet/20 rounded-full text-xs font-medium text-primary-violet">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.title}
                className="card text-center group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary-cyan transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-xl font-bold text-primary-violet mb-2">
                      {achievement.value}
                    </p>
                    <p className="text-foreground/70 text-sm mb-3">
                      {achievement.subtitle}
                    </p>
                    
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-cyan hover:text-primary-violet transition-colors text-sm font-medium hover:scale-105 transform"
                      >
                        View Profile
                        <span className="text-xs">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-foreground/70 mb-4">
              I'm constantly expanding my knowledge in emerging blockchain technologies and development practices.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Layer 2 Solutions', 'Zero-Knowledge Proofs', 'Cross-chain Bridges', 'DeFi Protocols', 'Smart Contract Auditing'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-cyan/10 border border-primary-cyan/20 rounded-full text-sm font-medium text-primary-cyan"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
