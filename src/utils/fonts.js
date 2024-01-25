import { Inter, Roboto, Rubik_Mono_One, Archivo_Black } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    display: 'swap'
})

// export const rubik_mono_one = Rubik_Mono_One({
//     subsets: ['latin'],
//     weight: ['400'],
//     display: 'swap'
// })

export const archivo_black = Archivo_Black({ // project headings, menu items
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap'
})