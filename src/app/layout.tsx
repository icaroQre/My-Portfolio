import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Ícaro Queiroz Reccanello',
  description: 'Portfolio Developer Ícaro Queiroz Reccanello',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
    <body className={lato.className}>{children}</body>
    </html>
  )
}
 