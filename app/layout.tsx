import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bright India',
  description: 'Created with Omi.dev',
  generator: 'omi.dev',
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
