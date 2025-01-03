// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Matrona Naty - Cuidado Maternal Especializado',
  description: 'Servicios profesionales de matrona, incluyendo control prenatal, asesoría en lactancia y más.',
  icons: {
    icon: [
      { url: '/favicon/logo.ico', sizes: '32x32' },
      { url: '/favicon/logo.png', sizes: '192x192' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon-ipad.png', sizes: '192x192' },
      { url: '/favicon/apple-touch-icon-iphone.png', sizes: '180x180' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}