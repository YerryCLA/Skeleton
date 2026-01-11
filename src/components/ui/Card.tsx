import { motion } from 'framer-motion'
import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card({ children, className, hover = false, glow = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={clsx(
        'bg-surface rounded-xl',
        'border border-border',
        hover && 'cursor-pointer hover:border-primary/50',
        glow && 'animate-glow',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={clsx('px-6 py-4 border-b border-border', className)}>
      {children}
    </div>
  )
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={clsx('p-6', className)}>{children}</div>
}

export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={clsx('px-6 py-4 border-t border-border', className)}>
      {children}
    </div>
  )
}
