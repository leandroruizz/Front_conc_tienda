import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Redes from '@/components/Redes'
import './globals.css'


export const metadata = {
  title: 'GreenAllDay',
  description: 'El Grow shop de Cordoba',
  keywords: 'next,react,app', 
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        <Redes/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
