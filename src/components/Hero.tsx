'use client'

import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(124,58,237,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Divyansh Patel</span>
            <br />
            <span className="gradient-text animate-gradient-x">
              Blockchain Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto">
            I build secure, scalable Web3 applications
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg text-foreground/70 font-mono">
            <span>Solidity</span>
            <span>•</span>
            <span>Hardhat</span>
            <span>•</span>
            <span>Ethers.js</span>
            <span>•</span>
            <span>IPFS</span>
            <span>•</span>
            <span>Node.js</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
            View Projects
            <ArrowRight className="h-5 w-5" />
          </Link>
          
          <Link href="/resume" className="btn-secondary inline-flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download Resume
          </Link>
          
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Me
          </Link>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-foreground/70">
            <MapPin className="h-5 w-5 text-primary-cyan" />
            <span>Bareilly, Uttar Pradesh</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-foreground/70">
            <Phone className="h-5 w-5 text-primary-green" />
            <span>+91-7906941751</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <Link
            href="https://github.com/Divyansh089"
            className="text-foreground/70 hover:text-primary-cyan transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
          
          <Link
            href="https://linkedin.com/in/pateldivyansh131"
            className="text-foreground/70 hover:text-primary-cyan transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          
          <Link
            href="mailto:pateldivyansh131@gmail.com"
            className="text-foreground/70 hover:text-primary-cyan transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-violet/20 to-primary-cyan/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-primary-green/20 to-primary-violet/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  )
}
