import type { Metadata } from 'next'
import { MainLayout } from './components/main-layout'
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
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
