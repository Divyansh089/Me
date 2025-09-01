'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Divyansh089', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/pateldivyansh131', icon: Linkedin },
  { name: 'Email', href: 'mailto:pateldivyansh131@gmail.com', icon: Mail },
]

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">DP</div>
            <p className="text-foreground/70 max-w-xs">
              Blockchain Developer building secure, scalable Web3 applications with a focus on innovation and user experience.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center text-foreground/70 hover:text-primary-cyan hover:border-primary-cyan transition-colors hover:scale-110 transform"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-foreground/70">
              <p>pateldivyansh131@gmail.com</p>
              <p>+91-7906941751</p>
              <p>Bareilly, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Divyansh Patel. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-foreground/70 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
