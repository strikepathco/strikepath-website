import SmoothScroll from '@/app/components/SmoothScroll'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Nav />
      {children}
      <Footer />
    </SmoothScroll>
  )
}
