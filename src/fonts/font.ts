import { Montserrat, Cascadia_Code } from 'next/font/google';
import localFont from 'next/font/local'

export const cascadia = Cascadia_Code({ 
  subsets: ['latin'],
  variable: '--font-code'
});
export const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat'
});
export const dirtyline = localFont({
  src: './Dirtyline.woff2',
  variable: '--font-dirtyline'
})