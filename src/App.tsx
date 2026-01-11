import { Layout, ContentHeader, ContentCard, ContentGrid } from './components/layout'
import { Button } from './components/ui'
import { Card, CardHeader, CardBody } from './components/ui/Card'
import { useAppStore } from './store'
import { motion } from 'framer-motion'
import {
  Zap,
  Palette,
  Box,
  Layers,
  ArrowRight,
  Sparkles,
  Code2,
  Rocket,
} from 'lucide-react'
import { match } from 'ts-pattern'

function App() {
  const { activeSection } = useAppStore()

  return (
    <Layout>
      {match(activeSection)
        .with('home', () => <HomePage />)
        .with('dashboard', () => <PlaceholderPage title="Dashboard" />)
        .with('games', () => <PlaceholderPage title="Games" />)
        .with('documents', () => <PlaceholderPage title="Documents" />)
        .with('team', () => <PlaceholderPage title="Team" />)
        .with('components', () => <ComponentsPage />)
        .with('settings', () => <PlaceholderPage title="Settings" />)
        .with('help', () => <PlaceholderPage title="Help & Support" />)
        .otherwise(() => <HomePage />)}
    </Layout>
  )
}

function HomePage() {
  return (
    <div className="space-y-8">
      <ContentHeader
        title="Welcome to Skeleton"
        description="A modern React template for building web applications"
        actions={
          <Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Get Started
          </Button>
        }
      />

      <ContentGrid columns={3}>
        <FeatureCard
          icon={<Zap className="w-6 h-6" />}
          title="Lightning Fast"
          description="Built with Vite for instant hot module replacement and optimized builds."
          color="primary"
        />
        <FeatureCard
          icon={<Palette className="w-6 h-6" />}
          title="Dark Theme"
          description="Beautiful dark robotic theme with Tailwind CSS for easy customization."
          color="secondary"
        />
        <FeatureCard
          icon={<Box className="w-6 h-6" />}
          title="Component Ready"
          description="Pre-built components with Framer Motion animations out of the box."
          color="accent"
        />
      </ContentGrid>

      <ContentCard className="mt-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-text mb-2">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-text-dim mb-4">
              This skeleton template includes everything you need to get started:
              React 18, TypeScript, Tailwind CSS, Zustand, Framer Motion, and more.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Zustand', 'Framer Motion', 'Vite'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-surface-elevated text-text-dim rounded-full border border-border"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" leftIcon={<Code2 className="w-4 h-4" />}>
              View Code
            </Button>
            <Button variant="primary" leftIcon={<Rocket className="w-4 h-4" />}>
              Deploy
            </Button>
          </div>
        </div>
      </ContentCard>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: 'primary' | 'secondary' | 'accent'
}) {
  const colorClasses = {
    primary: 'text-primary bg-primary/10',
    secondary: 'text-secondary bg-secondary/10',
    accent: 'text-accent bg-accent/10',
  }

  return (
    <Card hover>
      <CardBody>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClasses[color]}`}
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
        <p className="text-sm text-text-dim">{description}</p>
      </CardBody>
    </Card>
  )
}

function ComponentsPage() {
  return (
    <div className="space-y-8">
      <ContentHeader
        title="Components"
        description="Pre-built UI components included in this template"
      />

      <ContentCard>
        <h3 className="text-lg font-semibold text-text mb-4">Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" isLoading>
            Loading
          </Button>
          <Button variant="primary" leftIcon={<Sparkles className="w-4 h-4" />}>
            With Icon
          </Button>
        </div>
      </ContentCard>

      <ContentCard>
        <h3 className="text-lg font-semibold text-text mb-4">Cards</h3>
        <ContentGrid columns={2}>
          <Card>
            <CardHeader>
              <h4 className="font-medium text-text">Standard Card</h4>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-text-dim">
                This is a standard card with header and body sections.
              </p>
            </CardBody>
          </Card>
          <Card hover>
            <CardBody>
              <h4 className="font-medium text-text mb-2">Hover Card</h4>
              <p className="text-sm text-text-dim">
                This card has a hover effect. Try hovering over it!
              </p>
            </CardBody>
          </Card>
        </ContentGrid>
      </ContentCard>
    </div>
  )
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="p-8 rounded-2xl bg-surface border border-border"
      >
        <Layers className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-text mb-2">{title}</h1>
        <p className="text-text-dim max-w-md">
          This is a placeholder page. Replace this content with your own implementation.
        </p>
      </motion.div>
    </div>
  )
}

export default App
