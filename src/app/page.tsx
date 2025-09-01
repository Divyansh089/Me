import Hero from '@/components/Hero'
import SkillPills from '@/components/SkillPills'
import ProjectCard from '@/components/ProjectCard'
import Timeline from '@/components/Timeline'
import BadgeGrid from '@/components/BadgeGrid'
import { projects } from '@/data/projects'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              About Me
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Aspiring Blockchain Developer with hands-on experience building and deploying smart contracts (Solidity, Hardhat), 
              developing decentralized apps (React, Web3.js, Ethers.js), and integrating IPFS for secure data storage. 
              Skilled in backend development (Node.js, Express), cloud tools (Docker, GitHub Actions). 
              Adept at optimizing system performance, ensuring code quality, and delivering scalable, secure applications.
            </p>
            <Link
              href="/resume"
              className="btn-primary inline-flex items-center gap-2"
            >
              View Full Resume
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <SkillPills />
      
      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Showcasing my best work in blockchain development, smart contracts, and full-stack applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Timeline />
      <BadgeGrid />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary-violet/10 via-primary-cyan/10 to-primary-green/10">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new blockchain projects, smart contracts, and innovative Web3 solutions. 
              Let's discuss how we can bring your ideas to life on the blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get In Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
