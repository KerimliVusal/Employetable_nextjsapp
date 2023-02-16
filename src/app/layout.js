import './globals.css'
import Navbar from '@/components/navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
      
        
      <main> {children}</main> 
      <footer></footer>
        
        </body>
    </html>
  )
}
