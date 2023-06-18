import '@/styles/globals.css'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
// const myFont = localFont({ src: '../fonts/SFPRODISPLAYREGULAR.OTF'})

export const metadata = {
  title: 'Retail Enterprise',
  description: 'Trouvez la voiture de vos rêves',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body >
        {children}
      </body>
    </html>
  )
}
