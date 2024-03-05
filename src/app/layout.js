// import { Inter, Roboto, Rubik_Mono_One } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['700'],
//   display: 'swap'
// })

// const rubik_mono_one = Rubik_Mono_One({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['400']
// })

export const metadata = {
  title: 'Portfolio | Veronika Petersen',
  description: 'Frontend developer portfolio | Veronika Petersen',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      {/* <body className={rubik_mono_one.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  )
}
