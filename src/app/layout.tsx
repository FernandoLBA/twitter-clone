import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Clon de Twitter',
  description: 'Utilizando, React, Next, TypeScript y Supabase',
  authors: [{name: "Fernando Barrios", url: "https://github.com/FernandoLBA"}]
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
