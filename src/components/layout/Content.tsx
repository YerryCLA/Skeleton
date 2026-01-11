import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useAppStore } from '../../store/appStore'

interface ContentProps {
  children: React.ReactNode
}

export function Content({ children }: ContentProps) {
  const { sidebarOpen } = useAppStore()

  return (
    <motion.main
      initial={false}
      animate={{
        marginLeft: sidebarOpen ? 256 : 72,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className={clsx(
        'flex-1',
        'mt-14 mb-10',
        'min-h-[calc(100vh-6rem)]',
        'bg-background'
      )}
    >
      <div className="h-full p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          {children}
        </motion.div>
      </div>
    </motion.main>
  )
}

export function ContentHeader({
  title,
  description,
  actions,
}: {
  title: string
  description?: string
  actions?: React.ReactNode
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-text">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-text-dim">{description}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  )
}

export function ContentCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        'bg-surface rounded-xl',
        'border border-border',
        'p-6',
        className
      )}
    >
      {children}
    </div>
  )
}

export function ContentGrid({
  children,
  columns = 3,
}: {
  children: React.ReactNode
  columns?: 1 | 2 | 3 | 4
}) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={clsx('grid gap-6', gridCols[columns])}>{children}</div>
  )
}
