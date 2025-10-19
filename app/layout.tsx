import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Dog's Talent Show - Unleash the Talent!",
  description: 'The most pawsome talent show featuring amazing dogs!',
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
