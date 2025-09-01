import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary-cyan transition-colors mr-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            All Projects
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive showcase of my blockchain development projects, smart contracts, and full-stack applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-foreground/70 mb-6">
              I'm always open to discussing new blockchain projects, smart contract development, or Web3 innovation opportunities.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
