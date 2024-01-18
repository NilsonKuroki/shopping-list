import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopping List',
  description: 'Generated shopping list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-200">{children}</body>
    </html>
  )
}
