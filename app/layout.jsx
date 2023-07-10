import Provider from './components/Provider'
import Header from './components/template/Header'
import Footer from './components/template/Footer'
import { Inter } from 'next/font/google'
import crypto from 'crypto';
import './globals.css'

globalThis.crypto = crypto;
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CommentHear',
  description: 'Sentiment analysis from comments'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme="bumblebee"
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex h-full flex-col'>
        <Provider>
          <Header />
          <main className='grow px-2 sm:px-0'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
