import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leonardo Monte - DevOps Engineer Portfolio',
  description: 'DevOps Engineer portfolio showcasing infrastructure automation, cloud architecture, and modern deployment strategies',
  keywords: 'devops, cloud, infrastructure, automation, kubernetes, ci/cd, monitoring, terraform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
