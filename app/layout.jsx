import Provider from './components/Provider'
import HeaderNew from './components/template/HeaderNew'
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
          <HeaderNew />
          <main className='grow px-2 lg:px-0'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
