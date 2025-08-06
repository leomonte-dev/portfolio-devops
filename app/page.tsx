"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Globe, Server, Cloud, Shield, Zap, BarChart3, Settings, Users, Database, Lock, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function DevOpsPortfolio() {
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

  const technicalSkills = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      description: "SQL Server, Firebird, MongoDB"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "DevOps & Cloud", 
      description: "Docker, Kubernetes, AWS, Azure"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Automation",
      description: "Terraform, Jenkins, Ansible, ArgoCD"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Monitoring",
      description: "Prometheus, Zabbix"
    }
  ]

  const detailedSkills = [
    {
      title: "Programming Languages",
      description: "Python, Golang, SQL, CSS"
    },
    {
      title: "DevOps & Automation",
      description: "Terraform, Docker, Kubernetes, Jenkins, Ansible, ArgoCD, Bash scripting"
    },
    {
      title: "Monitoring & Cloud",
      description: "Prometheus, Zabbix, Azure, AWS"
    },
    {
      title: "Soft Skills",
      description: "Proactive, excellent communication, teamwork, problem-solving focused"
    }
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
            <a href="#about" className="text-yellow-300 hover:text-yellow-200 font-semibold">About</a>
            <a href="#skills" className="text-white hover:text-yellow-300">Skills</a>
            <a href="#projects" className="text-white hover:text-yellow-300">Projects</a>
            <a href="#contact" className="text-white hover:text-yellow-300">Contact</a>
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
                <li><a href="#about" className="text-white hover:text-yellow-300">→ About me</a></li>
                <li><a href="#skills" className="text-white hover:text-yellow-300">→ Technical skills</a></li>
                <li><a href="#projects" className="text-white hover:text-yellow-300">→ Projects</a></li>
                <li><a href="#contact" className="text-white hover:text-yellow-300">→ Contact</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-gray-200 to-white border border-gray-300 p-8 mb-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="max-w-2xl">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Aspiring DevOps Engineer
                  </h1>
                  <div className="bg-white border-l-4 border-blue-600 p-4 shadow-sm">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Experienced in CI/CD, infrastructure automation, and troubleshooting.</strong>
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      Specialized in Docker, Kubernetes, Terraform, and monitoring with Prometheus/Grafana.
                    </p>
                    <p className="text-sm text-gray-700">
                      Focused on IaC practices, efficient pipelines, and DevOps culture to optimize processes and ensure high availability and scalability.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center border border-gray-300">
                    <div className="text-center w-full p-4">
                      <div className="relative w-32 h-32 mx-auto -mb-1">
                        <Image
                          src="/images/oldpc.png"
                          alt="Old PC Icon"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-sm text-gray-600 font-semibold -mt-2">DevOps</div>
                      <div className="text-xs text-gray-600 -mt-1">Infrastructure & Automation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {technicalSkills && technicalSkills.length > 0 && technicalSkills.map((skill, index) => (
              <div key={`tech-${index}`} className="bg-white border border-gray-300 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="text-blue-600 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">{skill.title}</h3>
                </div>
                <p className="text-xs text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Skills */}
          <div className="bg-white border border-gray-300 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              Technical Expertise
            </h2>
            <div className="space-y-3">
              {detailedSkills && detailedSkills.length > 0 && detailedSkills.map((item, index) => (
                <div key={`detail-${index}`} className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <div className="text-blue-600 text-sm font-medium">
                      {item.title}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
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
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>DevOps:</span>
                <span className="font-semibold text-blue-600">Docker, K8s</span>
              </div>
              <div className="flex justify-between">
                <span>Cloud:</span>
                <span className="font-semibold text-blue-600">AWS, Azure</span>
              </div>
              <div className="flex justify-between">
                <span>Databases:</span>
                <span className="font-semibold text-blue-600">SQL, NoSQL</span>
              </div>
              <div className="flex justify-between">
                <span>Monitoring:</span>
                <span className="font-semibold text-blue-600">Prometheus</span>
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
