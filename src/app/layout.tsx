
import './globals.css'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '800', '200'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Xamicalli Club',
  description: 'Xamicalli Club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${poppins.className} bg-black max-w-[100vw] overflow-x-hidden`}
      >
        <div className="max-w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
