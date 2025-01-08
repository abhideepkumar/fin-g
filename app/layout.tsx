import './globals.css'
import { Poppins, Raleway, Noto_Sans, Yatra_One } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import LanguageSelector from './components/LanguageSelector'
import { LanguageProvider } from './contexts/LanguageContext'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-raleway',
})

const notoSans = Noto_Sans({
  subsets: ['devanagari'],
  weight: ['400', '700'],
  variable: '--font-noto-sans',
})

const yatraOne = Yatra_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-yatra-one',
})

export const metadata = {
  title: 'FinG: Empowering Rural Women',
  description: 'Your trusted partner for financial literacy and growth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable} ${notoSans.variable} ${yatraOne.variable}`}>
      <body className="flex flex-col min-h-screen">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <LanguageSelector />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

