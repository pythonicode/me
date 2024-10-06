import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'My App',
  description: 'Description of my app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
