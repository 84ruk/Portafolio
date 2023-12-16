import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Baruk Ramos - Desarrollador Web Junior MERN',
  description: "¡Hola! Soy Baruk, un desarrollador web junior MERN. Explora mi portafolio para descubrir mis proyectos y habilidades."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>{children}</body>
    </html>
  )
}
