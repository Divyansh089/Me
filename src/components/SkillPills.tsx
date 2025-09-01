'use client'

import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  GitBranch, 
  Shield,
  Cpu,
  Zap
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Solidity'],
    icon: Code2,
    color: 'from-primary-violet to-primary-cyan'
  },
  {
    title: 'Blockchain Tools',
    skills: ['Hardhat', 'Truffle', 'Ganache', 'Web3.js', 'Ethers.js', 'MetaMask'],
    icon: Shield,
    color: 'from-primary-green to-primary-cyan'
  },
  {
    title: 'Databases & Storage',
    skills: ['MySQL', 'MongoDB', 'IPFS (Pinata)'],
    icon: Database,
    color: 'from-primary-cyan to-primary-violet'
  },
  {
    title: 'Frameworks & Backend',
    skills: ['React', 'Node.js', 'Express', 'REST APIs', 'WebSockets'],
    icon: Server,
    color: 'from-primary-violet to-primary-green'
  },
  {
    title: 'DevOps',
    skills: ['Git/GitHub', 'Docker', 'Linux', 'GitHub Actions'],
    icon: GitBranch,
    color: 'from-primary-green to-primary-violet'
  }
]

export default function SkillPills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My technical expertise spans across blockchain development, full-stack web development, and DevOps practices.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-muted border border-border rounded-full text-sm font-medium hover:border-primary-cyan transition-colors cursor-default hover:scale-105 transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <div className="card max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary-cyan to-primary-green">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Performance & Quality</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['Gas Optimization', 'Smart Contract Security', 'Code Quality', 'Testing', 'Documentation'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-violet/10 border border-primary-violet/20 rounded-full text-sm font-medium text-primary-violet"
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
