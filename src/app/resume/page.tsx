'use client'

import { ArrowLeft, Download, Eye } from 'lucide-react'
import Link from 'next/link'

export default function ResumePage() {
  const handleDownload = () => {
    // Placeholder for resume download
    const link = document.createElement('a')
    link.href = '/Divyansh_Patel_Blockchain_Resume.pdf'
    link.download = 'Divyansh_Patel_Blockchain_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary-cyan transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Resume
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Download my detailed resume or view it online to learn more about my experience and skills.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleDownload}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download PDF
          </button>
          
          <a
            href="/Divyansh_Patel_Blockchain_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Eye className="h-5 w-5" />
            View Online
          </a>
        </div>

        {/* Resume Preview */}
        <div className="card">
          <div className="aspect-[8.5/11] bg-gradient-to-br from-primary-violet/10 to-primary-cyan/10 rounded-lg border-2 border-dashed border-primary-violet/30 flex items-center justify-center">
            <div className="text-center text-foreground/50">
              <div className="text-6xl mb-4">📄</div>
              <div className="text-xl font-semibold mb-2">Resume Preview</div>
              <div className="text-sm">
                Click "View Online" to see the full resume or "Download PDF" to save it locally.
              </div>
            </div>
          </div>
        </div>

        {/* Resume Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience Summary */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Experience Summary</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary-cyan rounded-full mt-2 flex-shrink-0" />
                <span><strong>Full-Stack Developer Intern</strong> at Unified Mentor Pvt Ltd (Feb 2025 - Apr 2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary-cyan rounded-full mt-2 flex-shrink-0" />
                <span>Developed responsive web applications using React and Node.js</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary-cyan rounded-full mt-2 flex-shrink-0" />
                <span>Implemented RESTful APIs and database integrations</span>
              </li>
            </ul>
          </div>

          {/* Key Skills */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Key Skills</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-primary-violet mb-2">Blockchain Development</h4>
                <p className="text-foreground/70 text-sm">Solidity, Smart Contracts, Hardhat, Web3.js, Ethers.js</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-cyan mb-2">Full-Stack Development</h4>
                <p className="text-foreground/70 text-sm">React, Node.js, Express, MongoDB, MySQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-green mb-2">DevOps & Tools</h4>
                <p className="text-foreground/70 text-sm">Git, Docker, GitHub Actions, Linux</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Ready to Connect?</h3>
            <p className="text-foreground/70 mb-6">
              If you're interested in my background and would like to discuss potential opportunities, 
              I'd love to hear from you!
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
