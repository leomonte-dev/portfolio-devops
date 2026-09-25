"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Globe, Mail, BarChart3, X } from 'lucide-react'
import Image from 'next/image'

export default function ProjectsPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [expandedImage, setExpandedImage] = useState<{src: string, alt: string} | null>(null)

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
      {/* Image Modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 z-10 bg-[#c0c0c0] text-black p-1 border-2 border-t-white border-l-white border-b-gray-700 border-r-gray-700 active:border-t-gray-700 active:border-l-gray-700 active:border-b-white active:border-r-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <Image
            src={expandedImage.src}
            alt={expandedImage.alt}
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-4 md:px-6 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
            <div className="text-xl md:text-2xl font-bold tracking-wider">
              <span className="bg-white text-blue-900 px-3 py-1 mr-2">LEONARDO</span>
              <span className="bg-white text-blue-900 px-3 py-1">MONTE</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/leonardomonte1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">LinkedIn</a>
              <a href="https://github.com/leomonte-dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">GitHub</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:leonardobmbaldo@gmail.com" className="text-white hover:text-yellow-300 break-all text-sm md:text-base">
              leonardobmbaldo@gmail.com
            </a>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 md:px-6 py-2">
          <div className="flex flex-wrap gap-x-6 gap-y-1 md:gap-x-8 text-sm">
            <a href="/" className="text-white hover:text-yellow-300">About</a>
            <a href="/projects" className="text-yellow-300 hover:text-yellow-200 font-semibold">Projects</a>
            <a href="/skills" className="text-white hover:text-yellow-300">Skills</a>
            <a href="/contact" className="text-white hover:text-yellow-300">Contact</a>
          </div>
        </nav>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 bg-gradient-to-b from-blue-600 to-blue-700 text-white min-h-screen">
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
        <main className="flex-1 min-w-0 p-4 md:p-6">
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-gray-200 to-white border border-gray-300 p-4 md:p-8 mb-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="max-w-2xl">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    My Projects
                  </h1>
                  <div className="bg-white border-l-4 border-blue-600 p-4">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Explore my DevOps and infrastructure projects.</strong>
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      From CI/CD pipelines to container orchestration and cloud infrastructure.
                    </p>
                    <p className="text-sm text-gray-700">
                      Each project demonstrates practical skills in automation, monitoring, and scalable solutions.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border border-gray-300">
                    <div className="text-center w-full p-4">
                      <div className="relative w-32 h-32 mx-auto -mb-1">
                        <Image
                          src="/images/folder.png"
                          alt="Projects Folder"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-sm text-gray-600 font-semibold -mt-2">Projects</div>
                      <div className="text-xs text-gray-600 -mt-1">DevOps & Infrastructure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Project Showcase */}
          <div className="bg-white border border-gray-300 p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              Featured Projects
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 border border-blue-200 p-4 md:p-6">
              <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-4 lg:gap-0">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-y-2 mb-3">
                    <div className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold mr-3">
                      DevOps
                    </div>
                    <div className="bg-green-600 text-white px-3 py-1 text-xs font-semibold mr-3">
                      Docker
                    </div>
                    <div className="bg-orange-600 text-white px-3 py-1 text-xs font-semibold">
                      Gaming
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    CS 1.6 Server DevOps
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Counter-Strike 1.6 server containerized with Docker, including complete automation,
                    administrator configuration, and management scripts. Project demonstrates
                    DevOps practices with containerization, deployment automation, and monitoring.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 text-sm mb-2">Technologies:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Docker & Docker Compose</li>
                        <li>• Python (Automation Scripts)</li>
                        <li>• PowerShell (Windows Automation)</li>
                        <li>• Batch Scripts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 text-sm mb-2">Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Complete containerization</li>
                        <li>• Automatic configuration</li>
                        <li>• Start/stop scripts</li>
                        <li>• Connection monitoring</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/leomonte-dev/cs16-server-devops"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#c0c0c0] text-black px-4 py-2 text-sm flex items-center border-2 border-t-white border-l-white border-b-gray-700 border-r-gray-700 active:border-t-gray-700 active:border-l-gray-700 active:border-b-white active:border-r-white"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div className="lg:ml-6">
                  <div
                    className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border border-gray-300 overflow-hidden cursor-pointer"
                    onClick={() => setExpandedImage({src: "/images/csmonitor.jpg", alt: "CS 1.6 Server Monitor"})}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/csmonitor.jpg"
                        alt="CS 1.6 Server Monitor"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Django Agenda Project */}
            <div className="bg-gradient-to-r from-green-50 to-gray-50 border border-green-200 p-4 md:p-6">
              <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-4 lg:gap-0">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-y-2 mb-3">
                    <div className="bg-green-600 text-white px-3 py-1 text-xs font-semibold mr-3">
                      Web Development
                    </div>
                    <div className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold mr-3">
                      Django
                    </div>
                    <div className="bg-yellow-600 text-white px-3 py-1 text-xs font-semibold mr-3">
                      Python
                    </div>
                    <div className="bg-cyan-600 text-white px-3 py-1 text-xs font-semibold">
                      Docker
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Django Agenda
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Contact management web application developed with Django, including
                    full support for local development and containerized with Docker.
                    Project demonstrates modern web development practices with CI/CD and environment
                    configuration for different deployment scenarios.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 text-sm mb-2">Technologies:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Python 3.12+ & Django 5.2.7</li>
                        <li>• PostgreSQL (Docker)</li>
                        <li>• Docker & Docker Compose</li>
                        <li>• GitHub Actions (CI/CD)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 text-sm mb-2">Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Contact registration and management</li>
                        <li>• Local and containerized support</li>
                        <li>• Continuous integration</li>
                        <li>• Environment configuration (.env)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/leomonte-dev/django-agenda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#c0c0c0] text-black px-4 py-2 text-sm flex items-center border-2 border-t-white border-l-white border-b-gray-700 border-r-gray-700 active:border-t-gray-700 active:border-l-gray-700 active:border-b-white active:border-r-white"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div className="lg:ml-6">
                  <div
                    className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center border border-gray-300 overflow-hidden cursor-pointer"
                    onClick={() => setExpandedImage({src: "/images/django-agenda.png", alt: "Django Agenda Project"})}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/django-agenda.png"
                        alt="Django Agenda Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 p-4 space-y-6">
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
      <footer className="bg-gray-800 text-white px-4 md:px-6 py-3">
        <div className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center text-xs">
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