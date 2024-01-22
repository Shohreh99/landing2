import type { Metadata } from 'next'
import {Montserrat} from 'next/font/google'
import './globals.css'

const montserrat_init = Montserrat({
  subsets:['latin'],
  weight:['100' ,'300','800'],
  variable:'--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Next.js 14',
  description: 'Next.js 14 Landing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'bg-black text-slate-200 ${montserrat_init.variable}'}>
        <main  className='bg-black p-5'>
          {children}
          </main>
      </body>
    </html>
  )
}
