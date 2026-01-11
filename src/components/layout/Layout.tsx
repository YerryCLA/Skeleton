import { MenuBar } from './MenuBar'
import { Sidebar } from './Sidebar'
import { Content } from './Content'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <MenuBar />
      <Sidebar />
      <Content>{children}</Content>
      <Footer />
    </div>
  )
}

export { ContentHeader, ContentCard, ContentGrid } from './Content'
