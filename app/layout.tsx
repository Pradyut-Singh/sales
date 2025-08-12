import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Sales Dashboard',
  description: 'Atomic Next.js Sales Dashboard sample',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <header className="bg-white shadow-sm py-4 px-6">
            <h1 className="text-xl font-semibold">Sales Dashboard (Atomic)</h1>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}