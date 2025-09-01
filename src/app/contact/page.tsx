'use client'

import { ArrowLeft, Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission
    console.log('Form submitted:', formData)
    // Here you would typically send the data to Formspree or your backend
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pateldivyansh131@gmail.com',
      href: 'mailto:pateldivyansh131@gmail.com',
      color: 'text-primary-cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7906941751',
      href: 'tel:+917906941751',
      color: 'text-primary-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bareilly, Uttar Pradesh',
      href: '#',
      color: 'text-primary-violet'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Divyansh089',
      color: 'hover:text-primary-cyan'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/pateldivyansh131',
      color: 'hover:text-primary-cyan'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
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
            Get In Touch
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, blockchain projects, or just have a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon
                  return (
                    <div key={contact.label} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-muted border border-border flex items-center justify-center ${contact.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/50">{contact.label}</p>
                        <a
                          href={contact.href}
                          className="text-foreground hover:text-primary-cyan transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-muted border border-border flex items-center justify-center text-foreground/70 ${social.color} transition-colors hover:scale-110 transform`}
                      aria-label={social.label}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Response */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-foreground/70 mb-4">
                I typically respond to messages within 24 hours. For urgent matters, feel free to call or email directly.
              </p>
              <div className="space-y-2 text-sm text-foreground/70">
                <p>• Available for freelance projects</p>
                <p>• Open to full-time opportunities</p>
                <p>• Interested in blockchain collaborations</p>
                <p>• Happy to discuss Web3 innovations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-20 text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-foreground/70 mb-6">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm here to help bring your blockchain vision to life.
            </p>
            <Link
              href="/projects"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
