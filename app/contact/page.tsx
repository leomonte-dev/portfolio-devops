"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Globe, Mail, BarChart3 } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const skills = [
    "Infrastructure as Code",
    "Container Orchestration",
    "CI/CD Pipelines",
    "Cloud Computing",
    "Database Management",
    "Monitoring & Observability"
  ]


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold tracking-wider">
              <span className="bg-white text-blue-900 px-3 py-1 mr-2">LEONARDO</span>
              <span className="bg-white text-blue-900 px-3 py-1">MONTE</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/leonardomonte1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">LinkedIn</a>
              <a href="https://github.com/leomonte-dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">GitHub</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:leonardobmbaldo@gmail.com" className="text-white hover:text-yellow-300">
              leonardobmbaldo@gmail.com
            </a>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-2">
          <div className="flex space-x-8 text-sm">
            <a href="/" className="text-white hover:text-yellow-300">About</a>
            <a href="/projects" className="text-white hover:text-yellow-300">Projects</a>
            <a href="/skills" className="text-white hover:text-yellow-300">Skills</a>
            <a href="/contact" className="text-yellow-300 hover:text-yellow-200 font-semibold">Contact</a>
          </div>
        </nav>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-blue-600 to-blue-700 text-white min-h-screen">
          <div className="p-4">
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3 text-blue-200">Core Competencies</h3>
              <ul className="space-y-1 text-xs">
                {skills && skills.length > 0 && skills.map((skill, index) => (
                  <li key={`skill-${index}`}>
                    <div className="text-white flex items-center">
                      <ChevronRight className="w-3 h-3 mr-1" />
                      {skill}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-blue-500 pt-4">
              <h4 className="text-sm font-semibold mb-2 text-blue-200">Quick Links</h4>
              <ul className="space-y-1 text-xs">
                <li><a href="/" className="text-white hover:text-yellow-300">→ About me</a></li>
                <li><a href="/skills" className="text-white hover:text-yellow-300">→ Technical skills</a></li>
                <li><a href="/projects" className="text-white hover:text-yellow-300">→ Projects</a></li>
                <li><a href="/contact" className="text-white hover:text-yellow-300">→ Contact</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="max-w-2xl w-full">
            {/* Under Construction Card */}
            <div className="bg-white border-2 border-gray-500 mb-6">
              <div
                className="h-5 border-b-2 border-black"
                style={{ background: "repeating-linear-gradient(45deg, #facc15 0 14px, #000 14px 28px)" }}
              />
              <div className="p-8 text-center">
                <h1
                  className="text-4xl font-bold text-black uppercase tracking-widest mb-6"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  Under Construction
                </h1>
                <div className="bg-[#ffffcc] border-2 border-t-gray-500 border-l-gray-500 border-b-white border-r-white p-4 mb-6">
                  <p className="text-lg text-black mb-2">
                    This page is currently being built.
                  </p>
                  <p className="text-sm text-gray-700">
                    Check back soon for updates!
                  </p>
                </div>

                <a
                  href="/"
                  className="inline-block bg-[#c0c0c0] text-black px-6 py-2 border-2 border-t-white border-l-white border-b-gray-700 border-r-gray-700 active:border-t-gray-700 active:border-l-gray-700 active:border-b-white active:border-r-white text-sm"
                >
                  &lt;&lt; Back to Home
                </a>

                <p className="mt-6 text-xs text-gray-500" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  Best viewed with Netscape Navigator 4.0 at 800x600
                </p>
              </div>
              <div
                className="h-5 border-t-2 border-black"
                style={{ background: "repeating-linear-gradient(45deg, #facc15 0 14px, #000 14px 28px)" }}
              />
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-64 p-4 space-y-6">
          {/* Contact Info */}
          <div className="bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200 p-4">
            <h3 className="font-bold text-blue-800 text-sm mb-2">
              <ChevronRight className="w-4 h-4 inline mr-1" />
              Contact
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center text-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:leonardobmbaldo@gmail.com" className="hover:text-blue-900">
                  leonardobmbaldo@gmail.com
                </a>
              </div>
              <div className="flex items-center text-blue-700">
                <Globe className="w-4 h-4 mr-2" />
                <span>Brazil</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white border border-gray-300 p-4">
            <h3 className="font-bold text-gray-800 text-sm mb-3">
              <Globe className="w-4 h-4 inline mr-1" />
              Languages
            </h3>
            <div className="space-y-2 text-xs">
              <div>✓ Portuguese (Native)</div>
              <div>✓ English (B2 - Upper Intermediate)</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white border border-gray-300 p-4">
            <h3 className="font-bold text-gray-800 text-sm mb-3">
              <BarChart3 className="w-4 h-4 inline mr-1" />
              Tech Stack
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-semibold text-gray-700 mb-1">Languages:</div>
                <div className="text-blue-600">Python, Golang, SQL, CSS</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-1">Databases:</div>
                <div className="text-blue-600">SQL Server, Firebird, MongoDB, RDS</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-1">DevOps & Automation:</div>
                <div className="text-blue-600">Terraform, CloudFormation, Docker, Kubernetes, Helm, Jenkins, Ansible, ArgoCD, Bash</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-1">CI/CD:</div>
                <div className="text-blue-600">GitHub Actions, Jenkins</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-1">Monitoring:</div>
                <div className="text-blue-600">Prometheus, Zabbix, Grafana</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-1">AWS Services:</div>
                <div className="text-blue-600">EC2, S3, VPC, Lambda, RDS</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-1">Operating Systems:</div>
                <div className="text-blue-600">Linux, Windows</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-1">Cloud:</div>
                <div className="text-blue-600">AWS, Azure</div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-6 py-3">
        <div className="flex justify-between items-center text-xs">
          <div className="space-x-4">
            <a href="https://linkedin.com/in/leonardomonte1" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">LinkedIn</a>
            <span>|</span>
            <a href="https://github.com/leomonte-dev" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">GitHub</a>
          </div>
          <div className="text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US')}
          </div>
        </div>
      </footer>
    </div>
  )
}
