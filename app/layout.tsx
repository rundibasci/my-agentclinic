import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentClinic',
  description: 'A recovery clinic for AI agents who need relief from contact with their humans.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
