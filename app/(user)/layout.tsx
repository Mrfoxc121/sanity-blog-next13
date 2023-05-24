import Banner from '../components/Banner'
import Header from '../components/Header'
import '../globals.css'


export const metadata = {
  title: 'Sanity Blog - Home',
  description: 'Generated by create next app',
  icon: '../favicon.icon'

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-7xl mx-auto bg-slate-50'>
      <Header />
      <Banner />
        {children}</body>
    </html>
  )
}