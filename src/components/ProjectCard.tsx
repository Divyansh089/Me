'use client'

import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Project } from '@/data/projects'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="card group cursor-pointer hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
      {/* Project Image */}
      <div className="relative mb-6 overflow-hidden rounded-lg flex-shrink-0">
        <div className="aspect-video bg-gradient-to-br from-primary-violet/20 to-primary-cyan/20 flex items-center justify-center">
          <div className="text-center text-foreground/50">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-sm">Project Image</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Project Content - Flex grow to push buttons to bottom */}
      <div className="flex flex-col flex-grow space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-violet/10 border border-primary-violet/20 rounded-full text-xs font-medium text-primary-violet"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bullet Points */}
        <ul className="space-y-2">
          {project.bullets.map((bullet, bulletIndex) => (
            <li
              key={bulletIndex}
              className="flex items-start gap-2 text-sm text-foreground/70"
            >
              <span className="w-1.5 h-1.5 bg-primary-cyan rounded-full mt-2 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Spacer to push buttons to bottom */}
        <div className="flex-grow"></div>

        {/* Action Buttons - Fixed at bottom */}
        <div className="flex gap-3 pt-4 mt-auto">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-secondary text-center inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
          
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-center inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-lg border-2 border-primary-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  )
}
